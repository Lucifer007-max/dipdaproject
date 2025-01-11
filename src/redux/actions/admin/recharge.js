import rechargeService from "../../../services/admin/recharge.service";
import { ADMIN_RECHARGE_LIST } from "../../types";

export const GetRechargeList = (payload) => async (dispatch) => {
    try {
      const res = await rechargeService.GetRechargeLists(payload);
      dispatch({
        type: ADMIN_RECHARGE_LIST,
        payload: res.data,
      });
  
      return Promise.resolve(res.data);
    } catch (err) {
      return Promise.reject(err);
    }
};