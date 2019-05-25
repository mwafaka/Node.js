import axios from "axios";
import {
  AUTH_SIGN_UP,
  AUTH_ERROR,
  AUTH_SIGN_OUT,
  AUTH_SIGN_IN,
  DASHBOARD_GET_DATA
} from "./types";

export const oauthGoogle = data => {
  return async dispatch => {
    console.log("we received", data);
    const res = await axios.post("http://localhost:5000/users/oauth/google", {
      access_token: data
    });

    dispatch({
      type: AUTH_SIGN_UP,
      payload: res.data.token
    });
    localStorage.setItem("JWT_TOKEN", res.data.token);
    axios.defaults.headers.common["Authorization"] = res.data.token;
  };
};

export const oauthFacebook = data => {
  return async dispatch => {
    console.log("we received", data);
    const res = await axios.post("http://localhost:5000/users/oauth/facebook", {
      access_token: data
    });

    dispatch({
      type: AUTH_SIGN_UP,
      payload: res.data.token
    });
    localStorage.setItem("JWT_TOKEN", res.data.token);
    axios.defaults.headers.common["Authorization"] = res.data.token;
  };
};
export const signUp = data => {
  return async dispatch => {
    try {
      const res = await axios.post("/http://localhost:5000/users/signup", data);
      console.log("res", res);

      dispatch({
        type: AUTH_SIGN_UP,
        payload: res.data.token
      });
      localStorage.setItem("JWT_TOKEN", res.data.token);
      axios.defaults.headers.common["Authorization"] = res.data.token;
    } catch (error) {
      dispatch({
        type: AUTH_ERROR,
        payload: "Email is already in use "
      });
    }
  };
};

export const signIn = data => {
  return async dispatch => {
    try {
      const res = await axios.post("http://localhost:5000/users/signin", data);
      console.log("res", res);

      dispatch({
        type: AUTH_SIGN_IN,
        payload: res.data.token
      });
      localStorage.setItem("JWT_TOKEN", res.data.token);
      axios.defaults.headers.common["Authorization"] = res.data.token;
    } catch (error) {
      dispatch({
        type: AUTH_ERROR,
        payload: "Email or password not valid  "
      });
    }
  };
};

export const getSecret = () => {
  return async dispatch => {
    const res = await axios.get("http://localhost:5000/users/secret");
    console.log("res", res);
    dispatch({
      type: DASHBOARD_GET_DATA,
      payload: res.data.secret
    });
  };
};

export const signOut = () => {
  return async dispatch => {
    localStorage.removeItem("JWT_TOKEN");
    axios.defaults.headers.common["Authorization"] = "";

    dispatch({
      type: AUTH_SIGN_OUT,
      payload: ""
    });
  };
};
