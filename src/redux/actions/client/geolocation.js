import geolocationService from "../../../services/client/geolocation.service";
import { CLIENT_GEO_LOCATIONS_GET } from "../../types";

export const GetClientGeolocation = (types, payload) => async (dispatch) => {
    try {
      const res = await geolocationService.getGeoLocationsClient(types, payload);
      dispatch({
        type: CLIENT_GEO_LOCATIONS_GET,
        payload: res.data,
      });
      return Promise.resolve(res.data);
    } catch (err) {
      return Promise.reject(err);
    }
};