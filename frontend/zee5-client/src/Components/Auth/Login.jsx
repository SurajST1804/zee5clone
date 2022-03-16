import React, { useState } from "react";
import Axios from "../../helpers/Axios";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { SignInForm } from "../../Redux/Action/action";
const Login = () => {
  let dispatch = useDispatch();
  let [state, setState] = useState({
    email: "",
    password: "",
  });

  let [logindata, setLoginData] = useState("");

  let { email, password } = state;

  let handleChange = (e) => {
    let { name, value } = e.target;
    setState({ ...state, [name]: value });
  };

  let handleSubmit = async (e) => {
    e.preventDefault();
    let payload = {
      email: email,
      password: password,
    };
    dispatch(SignInForm(payload));
    // await Axios.post("/signin", payload)
    //   .then((res) => {
    //     console.log(res);
    //     localStorage.setItem("login-token", res.data.token);
    //     setLoginData(res.data);
    //     if (res.data.token) {
    //       toast.success("Successfully Loged in");
    //       window.location.assign("/");
    //     }
    //   })
    //   .catch((err) => {
    //     // console.log(err);
    //     toast.error("user doesnt exists");
    //   });
  };
  // console.log(logindata.token);
  return (
    <section id="signupSection">
      <article>
        <div className="signupBlock1">
          <h2>Login</h2>
        </div>
        <div className="orBlock">
          <div>
            <span>or</span>
          </div>
        </div>
        <div className="formBlock">
          <form onSubmit={handleSubmit}>
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
            <div className="termsBlock">
              <p>
                By proceeding you agree to our <a href="">Terms of Services </a>
                &amp;
                <br />
                <a href=""> Privacy Policy</a>
              </p>
            </div>

            <div className="form-group">
              <button>Login</button>
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

export default Login;
