import rechanrgeService from "../../../services/client/recharge.service";
import { ADD_MONEY_WALLET, GET_MONEY_TRANSACTION_LIST, GET_MONEY_WALLET } from "../../types";

export const AddmoneyWallet = (data) => async (dispatch) => {
    try {
      const res = await rechanrgeService.AddMoney(data);
      dispatch({
        type: ADD_MONEY_WALLET,
        payload: res.data,
      });
  
      return Promise.resolve(res.data);
    } catch (err) {
      return Promise.reject(err);
    }
};
  
export const GetWalletmoney = () => async (dispatch) => {
    try {
      const res = await rechanrgeService.GetMoney();
      dispatch({
        type: GET_MONEY_WALLET,
        payload: res.data,
      });
  
      return Promise.resolve(res.data);
    } catch (err) {
      return Promise.reject(err);
    }
};
  
export const GetTransaction = (payload) => async (dispatch) => {
  try {
    const res = await rechanrgeService.GetRechargeTransaction(payload)
    dispatch({
      type: GET_MONEY_TRANSACTION_LIST,
      payload: res.data.data,
    });

    return Promise.resolve(res.data);
  } catch (err) {
    return Promise.reject(err);
  }
};