/* eslint-disable import/no-anonymous-default-export */
import {
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGOUT,
  } from "../types";
  
  const user = JSON.parse(localStorage.getItem("_oluo"));
  const initialState = user ? { isLoggedIn: true, user } : { isLoggedIn: false, user: null };
  
export default function (state = initialState, action) {
    const { type, payload } = action;
  
    switch (type) {
      case LOGIN_SUCCESS:
        return {
          ...state,
          isLoggedIn: true,
          user: payload,
        };
      case LOGIN_FAIL:
        return {
          ...state,
          isLoggedIn: false,
          user: null,
        };
      case LOGOUT:
        return {
          ...state,
          isLoggedIn: false,
          user: null,
        };
      default:
        return state;
    }
};
  