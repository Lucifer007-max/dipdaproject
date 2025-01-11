import {
  CLIENT_GET_INVITE,
    CLIENT_SENT_INVITE
} from "../../types/index";

const initialState = {inviteList:{} ,}
// eslint-disable-next-line import/no-anonymous-default-export
export default function (state = initialState, action) {
    const { type, payload } = action;
    switch (type) {
      case CLIENT_SENT_INVITE:
        return {
          ...state,
          // inviteList: payload,
        };
      case CLIENT_GET_INVITE:
        return {
          ...state,
          inviteList: payload.data,
        };

      default:
        return state;
    }
};