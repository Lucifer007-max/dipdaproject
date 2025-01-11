/* eslint-disable import/no-anonymous-default-export */
import {
    ADMIN_DASHBOARD_DATA
  } from "../../types/index";
  
const initialState = {admindashboard:{} ,}
export default function adminDashboardReducer (state = initialState, action) {
    const { type, payload } = action;
  
    switch (type) {
      case ADMIN_DASHBOARD_DATA:
        return {
          ...state,
          admindashboard: payload,
        };

      default:
        return state;
    }
};
  