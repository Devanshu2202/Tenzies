import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [dice, setDice] = useState(generateDice());
  const [tenzies, setTenzies] = useState(false);

  function generateDice() {
    const numbers = [];

    for (let i = 0; i < 10; i++) {
      numbers.push({
        id: i,
        value: Math.floor(Math.random() * 6) + 1,
        isHeld: false,
      });
    }

    return numbers;
  }

  function rollDice() {
    if (!tenzies) {
      setDice((prevDice) =>
        prevDice.map((die) =>
          die.isHeld
            ? die
            : { ...die, value: Math.floor(Math.random() * 6) + 1 },
        ),
      );
    } else {
      setTenzies(false);
      setDice(generateDice());
    }
  }

  function holdDice(id) {
    setDice((prevItem) =>
      prevItem.map((item) =>
        item.id === id ? { ...item, isHeld: !item.isHeld } : item,
      ),
    );
  }

  // ✅ Win condition
  // useEffect(() => {
  if (dice.length === 0) return;

  const allHeld = dice.every((die) => die.isHeld);
  const allSameValue = dice.every((die) => die.value === dice[0].value);

  if (allHeld && allSameValue) {
    setTenzies(true);
  }
  // }, [dice]);

  return (
    <div className="flex items-center justify-center min-h-screen bg-blue-950">
      <main className="bg-white rounded shadow-lg p-10 text-center">
        <h1 className="text-3xl font-bold mb-2">Tenzies</h1>

        <p className="text-gray-600 text-sm mb-6">
          Roll until all dice are the same. Click each die to freeze it at its
          current value between rolls.
        </p>

        {/* Dice Grid */}
        <div className="grid grid-cols-5 gap-4 mb-6">
          {dice.map((die) => (
            <button
              key={die.id}
              onClick={() => holdDice(die.id)}
              className={`w-12 h-12 flex items-center justify-center rounded-xl font-bold m-auto ${
                die.isHeld ? "bg-green-300" : "bg-gray-200"
              }`}
            >
              {die.value}
            </button>
          ))}
        </div>

        <button
          onClick={rollDice}
          className="bg-purple-600 text-white px-6 py-2 rounded-lg shadow"
        >
          {tenzies ? "New Game" : "Roll"}
        </button>

        {/* Win Message */}
        {tenzies && (
          <p className="mt-4 text-green-600 font-bold">
            🎉 Congratulations! You won!
          </p>
        )}
      </main>
    </div>
  );
}

export default App;
