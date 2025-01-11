import api from "../../../services/client/api";
import { CLIENT_LOGIN_SUCCESS,  CLIENT_LOGIN_FAIL,  CLIENT_LOGOUT,  CLIENT_SET_MESSAGE } from "../../types";
  
export const Clientlogin = (payload) => (dispatch) => {
    return api.Clientlogin(payload)
    .then(
      (data) => {
        dispatch({
          type: CLIENT_LOGIN_SUCCESS,
          payload: { user: data },
        });
        return Promise.resolve(data);
      },
      (error) => {
        const message =   (error.response ||  error.toString());
        // console.log(error, message)
  
        dispatch({
          type: CLIENT_LOGIN_FAIL,
        });
  
        dispatch({
          type: CLIENT_SET_MESSAGE,
          payload: message,
        });
  
        return Promise.reject(message);
      }
    ).catch((error) => {
      dispatch({
        type: CLIENT_SET_MESSAGE,
        payload: error,
      });
      return error
    })
};

export const logout = () => (dispatch) => {
  dispatch({
    type: CLIENT_LOGOUT,
  });
};
  