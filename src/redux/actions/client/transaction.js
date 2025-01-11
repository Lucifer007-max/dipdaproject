import dashboardService from "../../../services/client/dashboard.service";
import transactionService from "../../../services/client/transaction.service";
import { CLIENT_SEND_MONEY_AUTH_CLIENT, CLIENT_SEND_MONEY_CLIENT, CLIENT_TRANSACTION_LIST, CLIENT_TRASNFER_TRANSACTION_LIST } from "../../types";

  export const GetTransction = (payload) => async (dispatch) => {
      try {
        const res = await dashboardService.Gettransaction(payload);
        dispatch({
          type: CLIENT_TRANSACTION_LIST,
          payload: res.data,
        });
    
        return Promise.resolve(res.data);
      } catch (err) {
        return Promise.reject(err);
      }
  };
  

  export const GetTransferTransction = (payload) => async (dispatch) => {
    try {
      const response = await transactionService.getTransferTrasaction(payload);
      // console.log(response)
      dispatch({
        type: CLIENT_TRASNFER_TRANSACTION_LIST,
        payload: response,
      });
  
      return Promise.resolve(response);
    } catch (err) {
      return Promise.reject(err);
    }
};


export const sendMoneyToRegisteredClient = (payload) => async (dispatch) => {
  try {
    const response = await transactionService.sendMoneyToRegisteredClient(payload);
    // console.log(response)
    dispatch({
      type: CLIENT_SEND_MONEY_AUTH_CLIENT,
      payload: response,
    });

    return Promise.resolve(response);
  } catch (err) {
    return Promise.reject(err);
  }
};

export const sendMoneyToUnRegisteredClient = (payload) => async (dispatch) => {
  try {
    const response = await transactionService.sendMoneyToUnRegisteredClient(payload);
    dispatch({
      type: CLIENT_SEND_MONEY_CLIENT,
      payload: response,
    });

    return Promise.resolve(response);
  } catch (err) {
    return Promise.reject(err);
  }
};