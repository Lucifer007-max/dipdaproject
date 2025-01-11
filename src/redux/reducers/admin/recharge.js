/* eslint-disable import/no-anonymous-default-export */
import {
  ADMIN_RECHARGE_LIST
  } from "../../types";
  
const initialState = {rechargeList:[] }
export default function (state = initialState, action) {
    const { type, payload } = action;
  
    switch (type) {
      case ADMIN_RECHARGE_LIST:
        return {
          ...state,
          rechargeList: payload,
        };

      default:
        return state;
    }
};
  