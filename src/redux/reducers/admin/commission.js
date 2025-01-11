/* eslint-disable import/no-anonymous-default-export */
import {
  ADMIN_AGENCY_COMMISSION_GET,
  ADMIN_AGENCY_COMMISSION_UPDATE,
  ADMIN_COMMISSION_GET,
  ADMIN_COMMISSION_UPDATE
} from "../../types/index";

const initialState = { commission: {}, agencyCommission: [] }
export default function adminCommission(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case ADMIN_COMMISSION_GET:
      return {
        ...state,
        commission: payload,
      };

    case ADMIN_COMMISSION_UPDATE:
      return {
        ...state,
        commission: payload,
      };
    case ADMIN_AGENCY_COMMISSION_GET:
      return {
        ...state,
        agencyCommission: payload,
      };
    case ADMIN_AGENCY_COMMISSION_UPDATE:
      return {
        ...state,
        agencyCommission: payload,
      };
    default:
      return state;
  }
};
