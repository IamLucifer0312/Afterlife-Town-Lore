import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import backgroundImage from "/images/image1.jpg";
import "boxicons/css/boxicons.min.css";
import "./components/style/LoginRegister.css";

const LoginRegister = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const purpose = useParams().purpose;
  const storyNo = useParams().storyNo;
  const registerUrl = "/register";

  if (purpose == "story") {
    const registerUrl = "/register/story/" + storyNo;
  }
  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        "https://afterlife-town-lore.onrender.com/users/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ name, password }),
        }
      );

      if (response.ok) {
        const data = await response.json();
        localStorage.setItem("user", data._id);
        localStorage.setItem("isAuthenticated", true);
        if (purpose == "story") {
          navigate("/get-story/" + data._id + "/" + storyNo);
        } else {
          navigate("/main-page/" + data._id);
        }
      } else {
        const errorData = await response.json();
        setError(errorData.message || "Login failed!");
      }
    } catch (err) {
      setError("An error occurred during login. Please try again.");
    }
  };

  return (
    <div className="login-register">
      <div className="wrapper">
        <form action="" onSubmit={handleLogin}>
          <h1>Login</h1>
          <div className="input-box">
            <input
              type="text"
              placeholder="Username"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
            <i class="bx bxs-user"></i>
          </div>
          <div className="input-box">
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <i class="bx bxs-lock-alt"></i>
          </div>
          <div className="remember-forgot">
            <label>
              <input type="checkbox" />
              Remember me
            </label>
            <a href="/forgot-password">Forgot password?</a>
          </div>
          <button type="submit" className="btn">
            Login
          </button>
          <div className="register-link">
            Don't have an account? <a href={registerUrl}>Register</a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginRegister;
