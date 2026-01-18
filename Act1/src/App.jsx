import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();
  const [mode, setMode] = useState("login");
  const [form, setForm] = useState({
    email: "",
    password: "",
    username: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // Temporary in-memory "database"
  const [users, setUsers] = useState([]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setError(""); // Clear error on typing
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !form.email.trim() ||
      !form.password.trim() ||
      (mode === "register" && !form.username.trim())
    ) {
      setError("Please fill in all required fields, duh.");
      return;
    }

    setLoading(true);
    setError("");

    setTimeout(() => {
      if (mode === "register") {
    
        const emailExists = users.some((u) => u.email === form.email);
        if (emailExists) {
          setError("Na register namani na email dol, try ug lain.");
          setLoading(false);
          return;
        }

        setUsers([...users, { ...form }]);
        setLoading(false);
        setMode("login");
        setForm({ email: "", password: "", username: "" });
        alert("Naka Register naka,sulod na cutiepie sugarplum ko.");
      } else {
        
        const user = users.find(
          (u) => u.email === form.email && u.password === form.password
        );
        if (user) {
          setLoading(false);
          navigate("/loginpage"); 
        } else {
          setError("Pagtarong ug sulod sa imong credentials, dol, aglamalama kaman maypag register na nimo, naa ang link sa comment section.");
          setLoading(false);
        }
      }
    }, 1000);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-500 to-purple-600">
      <div className="bg-white p-8 rounded-2xl shadow-xl w-[350px]">
        <h1 className="text-2xl font-bold text-center mb-6">
          {mode === "login" ? "Balik man ka dol?" : "Create sa kol"}
        </h1>

        <form onSubmit={handleSubmit} className="space-y-4">
          {mode === "register" && (
            <input
              type="text"
              name="username"
              placeholder="Username"
              value={form.username}
              onChange={handleChange}
              className="w-full border rounded-lg p-2"
              required
            />
          )}

          <input
            type="email"
            name="email"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
            className="w-full border rounded-lg p-2"
            required
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            value={form.password}
            onChange={handleChange}
            className="w-full border rounded-lg p-2"
            required
          />

          {error && <p className="text-red-500 text-sm">{error}</p>}

          <button
            type="submit"
            disabled={loading}
            className={`w-full bg-indigo-600 text-white py-2 rounded-lg transition ${
              loading ? "opacity-50 cursor-not-allowed" : "hover:bg-indigo-700"
            }`}
          >
            {loading
              ? "Please wait..."
              : mode === "login"
              ? "Login"
              : "Register"}
          </button>
        </form>

        <p className="text-center text-sm mt-4">
          {mode === "login na lo" ? "Wakay account loy?" : "wabakay acc or naa nakay account?"}
          <button
            onClick={() => {
              if (loading) return;
              setMode(mode === "login" ? "register" : "login");
              setError("");
            }}
            className="ml-1 text-indigo-600 hover:underline transition-transform active:scale-95"
          >
            {mode === "login" ? "Register" : "Login"}
          </button>
        </p>
      </div>
    </div>
  );
}
