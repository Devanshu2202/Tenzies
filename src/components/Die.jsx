function Die({ value, isHeld, holdDice }) {
  return (
    <button
      onClick={holdDice}
      className={`w-14 h-14 text-xl font-bold rounded-lg shadow-md ${
        isHeld ? "bg-green-400" : "bg-gray-200"
      }`}
    >
      {value}
    </button>
  );
}

export default Die;
