import dashboardService from "../../../services/admin/dashboard.service";
import { ADMIN_DASHBOARD_DATA } from "../../types";

export const GetAdminDashboard = () => async (dispatch) => {
    try {
      const res = await dashboardService.GetAdminDashboard();
      dispatch({
        type: ADMIN_DASHBOARD_DATA,
        payload: res.data,
      });
  
      return Promise.resolve(res.data);
    } catch (err) {
      return Promise.reject(err);
    }
};
  