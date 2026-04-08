import "./App.css";

function App() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-blue-950">
      <main className="bg-white rounded-xl shadow-lg p-10 text-center">
        <h1 className="text-3xl font-bold mb-2">Tenzies</h1>

        <p className="text-gray-600 text-sm mb-6">
          Roll until all dice are the same. Click each die to freeze it at its
          current value between rolls.
        </p>

        <div className="grid grid-cols-5 gap-4 mb-6"></div>

        <button className="bg-purple-600 text-white px-6 py-2 rounded-lg shadow">
          Roll
        </button>
      </main>
    </div>
  );
}

export default App;
