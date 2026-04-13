import { useState } from "react";
import "./App.css";
import Die from "./components/Die";
import Confetti from "react-confetti";
import { useWindowSize } from "react-use";

function App() {
  const [dice, setDice] = useState(generateDice());
  const [tenzies, setTenzies] = useState(false);
  const { width, height } = useWindowSize();

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
    setDice((prev) =>
      prev.map((die) =>
        die.isHeld ? die : { ...die, value: Math.floor(Math.random() * 6) + 1 },
      ),
    );
  }

  function holdDice(id) {
    setDice((prev) =>
      prev.map((die) =>
        die.id === id ? { ...die, isHeld: !die.isHeld } : die,
      ),
    );
  }

  function newGame() {
    setDice(generateDice());
    setTenzies(false);
  }

  const diceElement = dice.map((die) => (
    <Die
      key={die.id}
      value={die.value}
      isHeld={die.isHeld}
      holdDice={() => holdDice(die.id)}
    />
  ));

  const allHeld = dice.every((die) => die.isHeld);
  const firstValue = dice[0].value;
  const allSameValue = dice.every((die) => die.value === firstValue);

  if (allHeld && allSameValue && !tenzies) {
    setTenzies(true);
  }

  return (
    <>
      {tenzies && <Confetti width={width} height={height} />}

      <div className="flex items-center justify-center h-screen bg-[#0B2434]">
        <div className="bg-white p-8 rounded-xl text-center">
          <h1 className="text-2xl font-bold mb-2">Tenzies</h1>

          {tenzies && (
            <h2 className="text-green-600 font-bold mb-4">🎉 You Won!</h2>
          )}
          <div className="grid grid-cols-5 gap-4 mb-6">{diceElement}</div>

          <button
            onClick={tenzies ? newGame : rollDice}
            className="bg-indigo-600 text-white px-6 py-2 rounded-lg shadow-md hover:bg-indigo-700"
          >
            {tenzies ? "New Game" : "Roll Dice"}
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
