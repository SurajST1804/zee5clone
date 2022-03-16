import Axios from "../../helpers/Axios";
import { toast } from "react-toastify";
export let SignUpForm = (payload) => {
  return async (dispatch) => {
    await Axios.post("/signup", payload)
      .then((res) => {
        console.log(res);
        localStorage.setItem("signup-token", res.data.token);
      })
      .catch((err) => {
        console.log(err);
      });
    console.log("Successfully Registered");

    dispatch({
      type: "SIGN_UP",
      payload: payload,
    });
  };
};

export let SignInForm = (payload) => {
  return async (dispatch) => {
    await Axios.post("/signin", payload)
      .then((res) => {
        console.log(res);
        localStorage.setItem("login-token", res.data.token);
        // setLoginData(res.data);
        if (res.data.token) {
          toast.success("Successfully Loged in");
          //   window.location.assign("/");
        }
      })
      .catch((err) => {
        // console.log(err);
        toast.error("user doesnt exists");
      });
    dispatch({
      type: "SIGN_IN",
      payload: payload,
    });
  };
};
