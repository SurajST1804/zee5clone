import React, { useState } from "react";
import { useDispatch } from "react-redux";
import Axios from "../../helpers/Axios";
import { SignUpForm } from "../../Redux/Action/action";
import "./signup.css";
const SignUp = () => {
  let dispatch = useDispatch();
  let [state, setState] = useState({
    username: "",
    email: "",
    password: "",
    password1: "",
    role: "",
    loading: false,
  });
  let { username, email, password, password1, role, loading } = state;
  let handleChange = (e) => {
    let { name, value } = e.target;
    setState({ ...state, [name]: value });
  };
  let handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // setState({ loading: true });
      if (password == password1) {
        let payload = {
          username: username,
          email: email,
          password: password,
          // role: role,
        };
        console.log(payload);
        // await Axios.post("/signup", payload).then((res) => {
        //   console.log(res);
        //   localStorage.setItem("signup-token", res.data.token);
        // });
        // setState("");
        dispatch(SignUpForm(payload));
      } else {
        console.log("Password is not matching");
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <section id="signupSection">
      <article>
        <div className="signupBlock1">
          <h2>Create a new account</h2>
          <p>
            Create an account to continue enjoying
            <br /> uninterrupted video and personalised
            <br /> experience
          </p>
        </div>
        <div className="signupBlock2">
          <img
            src="https://www.zee5.com/images/google-social-icon-circle.svg?ver=2.50.94"
            alt="img"
          />
          <p>Sign in</p>
        </div>
        <div className="orBlock">
          <div>
            <span>or</span>
          </div>
        </div>
        <div className="formBlock">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              {/* <label htmlFor="username">UserName</label> */}
              <input
                type="text"
                className="form-control"
                name="username"
                value={username}
                onChange={handleChange}
                id="username"
                placeholder="Enter username"
                required
              />
            </div>
            <div className="form-group">
              {/* <label htmlFor="email">Email</label> */}
              <input
                type="email"
                className="form-control"
                name="email"
                id="email"
                placeholder="Enter email"
                value={email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              {/* <label htmlFor="password">Password</label> */}
              <input
                type="password"
                className="form-control"
                name="password"
                id="password"
                placeholder="Enter password"
                value={password}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              {/* <label htmlFor="password">Password</label> */}
              <input
                type="password"
                className="form-control"
                name="password1"
                id="password1"
                placeholder="Re-Enter password"
                value={password1}
                onChange={handleChange}
                required
              />
            </div>
            <div className="termsBlock">
              <p>
                By proceeding you agree to our <a href="">Terms of Services </a>
                &amp;
                <br />
                <a href=""> Privacy Policy</a>
              </p>
            </div>

            <div className="form-group">
              <button>Register</button>
            </div>

            <div className="loginLink">
              <p>
                Already registered?&nbsp;<a href="">Login</a>
              </p>
            </div>
          </form>
        </div>
      </article>
    </section>
  );
};

export default SignUp;
