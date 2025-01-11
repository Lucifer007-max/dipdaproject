import api from "../../services/admin/api";
import { LOGIN_SUCCESS,  LOGIN_FAIL,  LOGOUT,  SET_MESSAGE } from "../types";
  
export const login = (payload) => (dispatch) => {
    return api.login(payload)
    .then(
      (data) => {
        console.log(data)
        dispatch({
          type: LOGIN_SUCCESS,
          payload: { user: data },
        });
        return Promise.resolve(data);
      },
      (error) => {
        const message =   (error.response ||  error.toString());
        // console.log(error, message)
  
        dispatch({
          type: LOGIN_FAIL,
        });
  
        dispatch({
          type: SET_MESSAGE,
          payload: message,
        });
  
        return Promise.reject(message);
      }
    ).catch((error) => {
      dispatch({
        type: SET_MESSAGE,
        payload: error,
      });
      return error
    })
};
export const logout = () => (dispatch) => {
  dispatch({
    type: LOGOUT,
  });
};
  