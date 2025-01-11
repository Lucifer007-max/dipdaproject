import geolocationService from "../../../services/admin/geolocation.service";
import rechargeService from "../../../services/admin/recharge.service";
import { ADMIN_GEO_LOCATIONS_GET } from "../../types";

export const GetGeolocation = (types) => async (dispatch) => {
    try {
      const res = await geolocationService.getGeoLocations(types);
      dispatch({
        type: ADMIN_GEO_LOCATIONS_GET,
        payload: res.data,
      });
  
      return Promise.resolve(res.data);
    } catch (err) {
      return Promise.reject(err);
    }
};