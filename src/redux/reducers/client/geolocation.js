/* eslint-disable import/no-anonymous-default-export */
import {
    CLIENT_GEO_LOCATIONS_GET
  } from "../../types/index";
  
const initialState = {clientLocation:{} ,}
export default function (state = initialState, action) {
    const { type, payload } = action;
  
    switch (type) {
      case CLIENT_GEO_LOCATIONS_GET:
        return {
          ...state,
          clientLocation: payload,
        };

      default:
        return state;
    }
};
  