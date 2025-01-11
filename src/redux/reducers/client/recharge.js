/* eslint-disable import/no-anonymous-default-export */
import {
    ADD_MONEY_WALLET,
    GET_MONEY_TRANSACTION_LIST,
    GET_MONEY_WALLET
  } from "../../types";
  
const initialState = {walletAmount:0 , moneyTransction:[] }
export default function (state = initialState, action) {
    const { type, payload } = action;
  
    switch (type) {
      case ADD_MONEY_WALLET:
        return {
          ...state,
          walletAmount: payload,
        };
      case GET_MONEY_WALLET:
          return {
              ...state,
              walletAmount: payload,
          };
      case GET_MONEY_TRANSACTION_LIST:
        return {
          ...state,
          moneyTransction: payload,
        };
    
      default:
        return state;
    }
};
  