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
        // Check if email already registered
        const emailExists = users.some((u) => u.email === form.email);
        if (emailExists) {
          setError("Email already registered. Try logging in.");
          setLoading(false);
          return;
        }
        // Register new user
        setUsers([...users, { ...form }]);
        setLoading(false);
        setMode("login");
        setForm({ email: "", password: "", username: "" });
        alert("Registered! Now login, cutie.");
      } else {
        // Login: check if email & password match a user in db
        const user = users.find(
          (u) => u.email === form.email && u.password === form.password
        );
        if (user) {
          setLoading(false);
          navigate("/loginpage"); // Successful login redirect
        } else {
          setError("Invalid email or password. Try again.");
          setLoading(false);
        }
      }
    }, 1000);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-500 to-purple-600">
      <div className="bg-white p-8 rounded-2xl shadow-xl w-[350px]">
        <h1 className="text-2xl font-bold text-center mb-6">
          {mode === "login" ? "Welcome back" : "Create account"}
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
          {mode === "login" ? "No account?" : "Already have an account?"}
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
