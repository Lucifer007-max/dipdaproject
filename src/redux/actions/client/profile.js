import profileService from "../../../services/client/profile.service";
import {  CLIENT_IMAGE_UPDATE, CLIENT_UPDATE_ROLE } from "../../types";

export const ProfileImageUpadte = (payload) => async (dispatch) => {
    try {
      const res = await profileService.ClientProfileImageUpdate(payload); 
      dispatch({
        type: CLIENT_IMAGE_UPDATE,
        payload: res.data,
      });
      return Promise.resolve(res.data);
    } catch (err) {
      return Promise.reject(err);
    }
};
  

export const ProfileRoleUpdate = (payload) => async (dispatch) => {
  try {
    const res = await profileService.ClientChangeRole(payload); 
    dispatch({
      type: CLIENT_UPDATE_ROLE,
      payload: res.data,
    });
    return Promise.resolve(res.data);
  } catch (err) {
    return Promise.reject(err);
  }
};
