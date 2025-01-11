/* eslint-disable import/no-anonymous-default-export */
import {
    CLIENT_DASHBOARD_DATA
  } from "../../types/index";
  
const initialState = {dashboard:{} ,}
export default function (state = initialState, action) {
    const { type, payload } = action;
  
    switch (type) {
      case CLIENT_DASHBOARD_DATA:
        return {
          ...state,
          dashboard: payload,
        };

      default:
        return state;
    }
};
  