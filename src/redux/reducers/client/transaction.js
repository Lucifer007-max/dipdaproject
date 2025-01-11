/* eslint-disable import/no-anonymous-default-export */
import {
  CLIENT_SEND_MONEY_AUTH_CLIENT,
  CLIENT_SEND_MONEY_CLIENT,
  CLIENT_TRANSACTION_LIST,
  CLIENT_TRASNFER_TRANSACTION_LIST
} from "../../types/index";

const initialState = { transaction: {}, transactionAll: {}, sendMoneyAuthClient: {}, sendMoneyUnAuthClient: {}}
export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case CLIENT_TRANSACTION_LIST:
      return {
        ...state,
        transaction: payload,
      };
    case CLIENT_TRASNFER_TRANSACTION_LIST:
      return {
        ...state,
        transactionAll: payload,
      };
    case CLIENT_SEND_MONEY_AUTH_CLIENT:
      return {
        ...state,
        sendMoneyAuthClient: payload,
      };
    case CLIENT_SEND_MONEY_CLIENT:
      return {
        ...state,
        sendMoneyUnAuthClient: payload
      }
    default:
      return state;
  }
};