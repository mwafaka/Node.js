import axios from "axios";
import { AUTH_SIGN_UP } from "./types";

export const signUp = data => {
  return async dispatch => {
    try {
      const res = await axios.post("http://localhost:5000/users/signup", data);
      console.log("res", res);

      dispatch({
        type: AUTH_SIGN_UP,
        payload: res.data.token
      });
      localStorage.setItem("JWT_TOKEN", res.data.token);
    } catch (error) {
      console.log("err", error);
    }
  };
};
