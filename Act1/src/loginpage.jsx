import { useState } from "react";

const messages = [
  "WHAHAHAHHAHA",
  "404: Motivation not found.",
  "Wala mani pulos.",
  "ano ano ano? ano jay?.",
  "I LOVE YOU <3",
  "Touch some grass. Or don't."
];

const colors = [
  "from-pink-500 to-purple-600",
  "from-indigo-500 to-cyan-500",
  "from-emerald-400 to-lime-500",
  "from-orange-400 to-rose-500"
];

export default function App() {
  const [msg, setMsg] = useState(messages[0]);
  const [bg, setBg] = useState(colors[0]);

  const randomize = () => {
    setMsg(messages[Math.floor(Math.random() * messages.length)]);
    setBg(colors[Math.floor(Math.random() * colors.length)]);
  };

  return (
    <div className={`min-h-screen flex items-center justify-center bg-gradient-to-br ${bg} transition-all duration-500`}>
      <div className="bg-white/90 backdrop-blur p-8 rounded-2xl shadow-xl w-[360px] text-center space-y-4">
        <h1 className="text-2xl font-bold">Random Page</h1>
        <p className="text-gray-700">{msg}</p>

        <button
          onClick={randomize}
          className="w-full bg-black text-white py-2 rounded-xl hover:scale-105 transition"
        >
          Randomize ✨
        </button>

        <p className="text-xs text-gray-400">Built with React + Vite</p>
      </div>
    </div>
  );
}
