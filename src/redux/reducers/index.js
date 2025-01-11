import { combineReducers } from "redux";
import auth from "./auth";
// CLIENT
import dashboard from "./client/dashboard";
import transaction from "./client/transaction";
import adminGeolocationReducer from "./admin/geolocation";
// ADMIN
import adminDashboardReducer from "./admin/dashboard";
import adminCommission from "./admin/commission";
import adminRecharge from "./admin/recharge";
import recharge from './client/recharge'
import profile from "./client/profile";
import geolocation from "./client/geolocation";
import invite from "./client/invite";
const reducers = combineReducers({
  auth,
  dashboard,
  transaction,
  recharge,
  profile,
  geolocation,
  invite,
  
  adminDashboardReducer,
  adminCommission,
  adminRecharge,
  adminGeolocationReducer
});

export default reducers;
