import dashboardService from "../../../services/client/dashboard.service";
import { CLIENT_DASHBOARD_DATA } from "../../types";

export const GetDashboard = (payload) => async (dispatch) => {
    try {
      const res = await dashboardService.GetDashboard(payload);
      dispatch({
        type: CLIENT_DASHBOARD_DATA,
        payload: res.data,
      });
  
      return Promise.resolve(res.data);
    } catch (err) {
      return Promise.reject(err);
    }
};
  