import {
    CLIENT_IMAGE_UPDATE,
    CLIENT_UPDATE_ROLE
} from "../../types/index";

const initialState = {userProfile:{} ,}
// eslint-disable-next-line import/no-anonymous-default-export
export default function (state = initialState, action) {
    const { type, payload } = action;
  
    switch (type) {
      case CLIENT_IMAGE_UPDATE:
        return {
          ...state,
          userProfile: payload,
        };
        case CLIENT_UPDATE_ROLE:
          return {
            ...state,
          };
      default:
        return state;
    }
};