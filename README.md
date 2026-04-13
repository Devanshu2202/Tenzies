# 🎲 Tenzies

A fun and interactive dice game built with React. Roll the dice, hold the ones you like, and try to get all ten dice showing the same number. When you win, enjoy a confetti celebration! 🎉

## 🎮 How to Play

1. Click **Roll Dice** to roll all ten dice.
2. Click on a die to **hold** it at its current value (it turns green).
3. Click a held die again to **release** it.
4. Keep rolling until all ten dice show the **same number**.
5. Once you win, click **New Game** to play again!

## ✨ Features

- **10 interactive dice** — click to hold/release individual dice
- **Win detection** — automatically detects when all dice match
- **Confetti celebration** — triggers a confetti animation on winning
- **New Game** — reset and play again instantly

## 🛠️ Tech Stack

| Technology | Purpose |
|---|---|
| [React 19](https://react.dev/) | UI library |
| [Vite 8](https://vite.dev/) | Build tool & dev server |
| [Tailwind CSS 4](https://tailwindcss.com/) | Utility-first styling |
| [react-confetti](https://www.npmjs.com/package/react-confetti) | Win celebration animation |
| [react-use](https://github.com/streamich/react-use) | `useWindowSize` hook for responsive confetti |

## 📁 Project Structure

```
Tenzies/
├── public/
├── src/
│   ├── assets/
│   ├── components/
│   │   └── Die.jsx          # Individual die component
│   ├── App.jsx               # Main game logic & UI
│   ├── App.css
│   ├── index.css
│   └── main.jsx              # Entry point
├── index.html
├── package.json
├── vite.config.js
└── eslint.config.js
```

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or higher recommended)
- npm

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/Devanshu2202/Tenzies.git
   cd Tenzies
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start the development server**

   ```bash
   npm run dev
   ```

4. Open your browser and navigate to the URL shown in the terminal (usually `http://localhost:5173`).

### Other Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start the development server |
| `npm run build` | Build for production |
| `npm run preview` | Preview the production build |
| `npm run lint` | Run ESLint |

## 📸 Preview

Roll all ten dice to match and trigger the confetti! 🎲🎲🎲🎲🎲🎲🎲🎲🎲🎲

## 📄 License

This project is open source and available for personal and educational use.
