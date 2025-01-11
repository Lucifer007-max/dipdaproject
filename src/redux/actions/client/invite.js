import inviteService from "../../../services/client/invite.service";
import {  CLIENT_GET_INVITE, CLIENT_SENT_INVITE } from "../../types";

export const inviteSent = (payload) => async (dispatch) => {
    try {
      const res = await inviteService.sentInvitation(payload);
 
      dispatch({
        type: CLIENT_SENT_INVITE,
        payload: res.data,
      });
      return Promise.resolve(res.data);
    } catch (err) {
      return Promise.reject(err);
    }
};
  

export const inviteGet = (payload) => async (dispatch) => {
  try {
    const res = await inviteService.getInvitationList(payload);

    dispatch({
      type: CLIENT_GET_INVITE,
      payload: res.data,
    });
    return Promise.resolve(res.data);
  } catch (err) {
    return Promise.reject(err);
  }
};
