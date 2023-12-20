import React, { useState } from "react";
// import "./signup.css";
import { Link } from "react-router-dom";
import axiosClient from "../../AxiosClient/axiosClient";
import router from "../../router";
import Spinner from "../../Components/Spinner/Spinner";
function SignUp() {
  const [user, setUser] = useState();
  const [password, setPassword] = useState();
  const [passwordConf, setPasswordConf] = useState();
  const [error, setError] = useState();
  const [loading, setLoading] = useState(false);
  const SendData = (ev) => {
    setLoading(true);
    ev.preventDefault();
    if (password === passwordConf) {
      axiosClient
        .post("/signup", { name: user, password: password })
        .then(({ data }) => {
          localStorage.setItem("TOKEN", data.token);
          localStorage.setItem("USER", data.user.name);
          localStorage.setItem("USER-STATE", data.user.admin);
          router.navigate("/dashboard");
        })
        .catch((err) => {
          const finalErrors = [
            err.response.data.errors
              ? [
                  err.response.data.errors.name,
                  err.response.data.errors.password,
                ]
              : [err.response.data.message, err.response.data.error],
          ];
          setError(finalErrors);
        })
        .finally(() => {
          setLoading(false);
        });
    }
  };
  return (
    <>
      <h1>Sign Up</h1>
      <form onSubmit={(ev) => SendData(ev)}>
        <label for="username-field">Username:</label>
        <input
          type="text"
          name="username"
          id="username-field"
          placeholder="Type Your Name"
          value={user}
          onChange={(ev) => setUser(ev.target.value)}
        />
        <label for="password-field">Password:</label>
        <input
          type="password"
          name="password"
          id="password-field"
          placeholder="Type Your Password"
          value={password}
          onChange={(ev) => setPassword(ev.target.value)}
        />
        <label for="password-field">Confirm Password:</label>
        <input
          type="password"
          name="confirm-password"
          id="password-field"
          placeholder="Confirm Your Password"
          value={passwordConf}
          onChange={(ev) => setPasswordConf(ev.target.value)}
        />
        <input type="submit" value="Sign Up" />
        <p>
          Have An Account? <Link to="/login">Login</Link>
        </p>
      </form>
      {error && (
        <div className="error">
          {error.map((value, index) => (
            <p key={index}>{value}</p>
          ))}
        </div>
      )}
      {loading && <Spinner />}
    </>
  );
}

export default SignUp;
