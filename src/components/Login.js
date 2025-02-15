import { useState } from "react";
import { auth } from "../firebase";
import { signInWithEmailAndPassword, sendPasswordResetEmail } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(""); // Clear previous errors

    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/"); // Redirect to Home after login
    } catch (error) {
      console.error("Login Error:", error.code, error.message); // Log the exact error
      if (error.code === "auth/user-not-found") {
        setError("User not found. Please register first.");
      } else if (error.code === "auth/wrong-password") {
        setError("Incorrect password. Try again.");
      } else if (error.code === "auth/invalid-email") {
        setError("Invalid email format.");
      } else {
        setError("Login failed. Check your credentials.");
      }
    }

    setLoading(false);
  };

  // Handle password reset
  const handleResetPassword = async () => {
    if (!email) {
      alert("Please enter your email first!");
      return;
    }
    try {
      await sendPasswordResetEmail(auth, email);
      alert("Password reset link sent! Check your email.");
    } catch (err) {
      setError("Error resetting password. Try again.");
    }
  };

  return (
    <div className="login-container"> {/* Change class name to avoid conflicts */}
      <h2>Login</h2>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <form onSubmit={handleLogin}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit" disabled={loading}>
          {loading ? "Logging in..." : "Login"}
        </button>
      </form>
  
      {/* Forgot Password Option */}
      <p>
        <a href="#" onClick={handleResetPassword} style={{ color: "#00c6ff", cursor: "pointer" }}>
          Forgot Password?
        </a>
      </p>
    </div>
  );
  
};

export default Login;
