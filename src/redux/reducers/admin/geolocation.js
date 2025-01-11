import {
    ADMIN_GEO_LOCATIONS_GET
  } from "../../types/index";
  
const initialState = {allLocation:{} ,}
export default function adminGeolocationReducer (state = initialState, action) {
    const { type, payload } = action;
  
    switch (type) {
      case ADMIN_GEO_LOCATIONS_GET:
        return {
          ...state,
          allLocation: payload,
        };

      default:
        return state;
    }
};
  