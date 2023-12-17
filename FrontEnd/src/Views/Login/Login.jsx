import React, { useState } from "react";
import logo from "../../Assets/Images/logo.png";
import { Link, useNavigate } from "react-router-dom";
import axiosClient from "../../AxiosClient/axiosClient";
import router from "../../router";
import Spinner from "../../Components/Spinner/Spinner";
import axios from "axios";
// import "./login.css";
function Login() {
  const [user, setUser] = useState();
  const [password, setPassword] = useState();
  const [error, setError] = useState();
  const [loading, setLoading] = useState();
  function SendData(ev) {
    ev.preventDefault();
    setLoading(true);
    axiosClient
      .post("/login", { name: user, password: password })
      .then(({ data }) => {
        localStorage.setItem("TOKEN", data.token);
        localStorage.setItem("USER", data.user.name);
        localStorage.setItem("USER-STATE", data.user.Admin);
        router.navigate("/dashboard");
      })
      .catch((err) => {
        const finalErrors = [
          err.response.data.message,
          err.response.data.errors.name,
          err.response.data.errors.password,
        ];
        console.log(finalErrors);
        setError(finalErrors);
      })
      .finally(() => {
        setLoading(false);
      });
  }
  return (
    <>
      <h1>Login</h1>
      <form onSubmit={(ev) => SendData(ev)}>
        <label htmlFor="username-field">Username:</label>
        <input
          type="text"
          name="username"
          id="username-field"
          placeholder="Type Your Name"
          value={user}
          onChange={(ev) => setUser(ev.target.value)}
        />
        <label htmlFor="password-field">Password:</label>
        <input
          type="password"
          name="password"
          id="password-field"
          placeholder="Type Your Password"
          value={password}
          onChange={(ev) => setPassword(ev.target.value)}
        />
        <input type="submit" value="Login" />
        <p>
          Don`t Have An Account? <Link to="/signup">Create One For Free</Link>
        </p>
        {error && (
          <div className="error">
            Abood
            {error.map((value, index) => (
              <p key={index}>{value}</p>
            ))}
          </div>
        )}
      </form>

      {loading && <Spinner />}
    </>
  );
}

export default Login;
