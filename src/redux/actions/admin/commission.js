import comissionService from "../../../services/admin/comission.service";
import { ADMIN_AGENCY_COMMISSION_GET, ADMIN_AGENCY_COMMISSION_UPDATE, ADMIN_COMMISSION_GET ,ADMIN_COMMISSION_UPDATE } from "../../types";

export const GetDefaultcommission = () => async (dispatch) => {
    try {
      const res = await comissionService.getDefaultCommission();
      dispatch({
        type: ADMIN_COMMISSION_GET,
        payload: res.data,
      });
  
      return Promise.resolve(res.data);
    } catch (err) {
      return Promise.reject(err);
    }
};
  

export const UpdateDefaultcommission = (payload) => async (dispatch) => {
    try {
      const res = await comissionService.updateDefaultCommission(payload);
      dispatch({
        type: ADMIN_COMMISSION_UPDATE,
        payload: res.data,
      });
  
      return Promise.resolve(res.data);
    } catch (err) {
      return Promise.reject(err);
    }
};
  


export const GetAgencycommission = () => async (dispatch) => {
  try {
    const res = await comissionService.getAgencyCommission();
    dispatch({
      type: ADMIN_AGENCY_COMMISSION_GET,
      payload: res.data,
    });

    return Promise.resolve(res.data);
  } catch (err) {
    return Promise.reject(err);
  }
};


export const UpdateAgencycommission = (payload) => async (dispatch) => {
  try {
    const res = await comissionService.updateAgencyCommission(payload);
    dispatch({
      type: ADMIN_AGENCY_COMMISSION_UPDATE,
      payload: res.data,
    });

    return Promise.resolve(res.data);
  } catch (err) {
    return Promise.reject(err);
  }
};



export const updateAgencyToDefultCommission = (payload) => async (dispatch) => {
  try {
    const res = await comissionService.updateAgencyToDefultCommission(payload);
    dispatch({
      type: ADMIN_AGENCY_COMMISSION_UPDATE,
      payload: res.data,
    });

    return Promise.resolve(res.data);
  } catch (err) {
    return Promise.reject(err);
  }
};



