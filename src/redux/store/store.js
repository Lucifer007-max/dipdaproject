import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import {thunk} from "redux-thunk";
import reducers from "../reducers/index";
import storage from "redux-persist/lib/storage";
import persistReducer from "redux-persist/es/persistReducer";
import persistStore from "redux-persist/es/persistStore";


const persistConfig = {
  key: "root",
  storage,
  whitelist: ["session"],
};


// Create a persisted reducer
const persistedReducer = persistReducer(persistConfig, reducers);

const store = createStore(
  persistedReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

// Create a persistor
const persistor = persistStore(store);
export { store, persistor };
