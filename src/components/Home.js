import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    await logout();
    navigate("/login");
  };

  return (
    <div className="container">
      {user ? (
        <>
          <h2>Welcome, {user.email} 🎉</h2>
          <button onClick={handleLogout}>Logout</button>
        </>
      ) : (
        <>
          <h2>Please Login or Register</h2>
          <p>Access exclusive features after logging in!</p>
        </>
      )}
    </div>
  );
};

export default Home;
