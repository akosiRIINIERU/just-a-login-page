import { useState } from "react";
import { useNavigate } from "react-router-dom";

const messages = [
  "WHAHAHAHHAHA",
  "404: Motivation not found.",
  "Wala mani pulos.",
  "ano ano ano? ano jay?.",
  "I LOVE YOU <3",
  "Touch some grass. Or don't.",
  "Pahawa dri.",
  "Sumbagay ta dol.",
  "Love baya tika ate ko.",
  "67.",
  "Naa kay uyab? pwede ko mutry? if di mag work, then atleast we tried diba? hahahahha atay",
  "Ta valo!, alsaha ang stuck iron",
  "Pwede tika ma retri gang?.",
  "NIG-... NIGHTS na wala ka.",
  "Gimingaw nako nimo.",
  "BADEYA.",
  "PLDT BOGO PANIRADO RAGUD MO, ABANDON NAGUD KOG 5 GAMES.",
  "Kulera kaba, agatngan man ta nimos kapunggukan, agtarong ka diha, atay kang kuliraha ka.",
  "Ayaw kog suwayi ha, mahinaykan tika ron, maypag manglimos ka maka kwarta paka, naa ang link sa comment section.",
];

const colors = [
  "from-pink-500 to-purple-600",
  "from-indigo-500 to-cyan-500",
  "from-emerald-400 to-lime-500",
  "from-orange-400 to-rose-500"
];

export default function Login() {
  const [msg, setMsg] = useState(messages[0]);
  const [bg, setBg] = useState(colors[0]);
  const navigate = useNavigate();

  const randomize = () => {
    setMsg(messages[Math.floor(Math.random() * messages.length)]);
    setBg(colors[Math.floor(Math.random() * colors.length)]);
  };


  const handleLogout = () => {
    navigate("/");
  };

  return (
    <div
      className={`min-h-screen flex items-center justify-center bg-gradient-to-br ${bg} transition-all duration-500`}
    >
      <div className="bg-white/90 backdrop-blur p-8 rounded-2xl shadow-xl w-[360px] text-center space-y-4">
        <h1 className="text-2xl font-bold">Random na way buot na Page</h1>
        <p className="text-gray-700">{msg}</p>

        <button
          onClick={randomize}
          className="w-full bg-black text-white py-2 rounded-xl hover:scale-105 transition"
        >
          Randomize ✨
        </button>

        
        <button
          onClick={handleLogout}
          className="w-full mt-4 bg-indigo-600 text-white py-2 rounded-xl hover:bg-indigo-700 transition"
        >
          Logout
        </button>

        <p className="text-xs text-gray-400">Logout na, wala mani buot na page</p>
      </div>
    </div>
  );
}
