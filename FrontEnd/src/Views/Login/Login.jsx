import React, { useState } from "react";
import logo from "../../Assets/Images/logo.png";
import { Link, useNavigate } from "react-router-dom";
import axiosClient from "../../AxiosClient/axiosClient";
import router from "../../router";
import Spinner from "../../Components/Spinner/Spinner";
// import "./login.css";
function Login() {
  const [user, setUser] = useState();
  const [password, setPassword] = useState();
  const [error, setError] = useState({ __html: "" });
  const [loading, setLoading] = useState();
  const navigate = useNavigate();
  function SendData(ev) {
    ev.preventDefault();
    setLoading(true);
    axiosClient
      .post("/login", { name: user, password: password })
      .then(({ data }) => {
        localStorage.setItem("TOKEN", data.token);
        localStorage.setItem("USER", data.user.name);
        localStorage.setItem("USER-STATE", data.user.admin);
        setLoading(false);
        router.navigate("/dashboard");
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
        // const finaleError = error.response.data.error;
        // console.log(finaleError);
        // setError({ __html: finaleError });
        // console.log(error);
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
      </form>

      {error.__html && (
        <div className="error" dangerouslySetInnerHTML={error}></div>
      )}
      {loading && <Spinner />}
    </>
  );
}

export default Login;
