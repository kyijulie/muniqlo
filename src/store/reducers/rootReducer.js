import { combineReducers } from "redux";
import menuReducer from "./menuReducer";
import authReducer from "./authReducer";
import colorReducer from "./colorReducer";
import { firestoreReducer } from "redux-firestore";
import { firebaseReducer } from "react-redux-firebase";

const rootReducer = combineReducers({
  auth: authReducer,
  menu: menuReducer,
  color: colorReducer,
  firestore: firestoreReducer,
  firebase: firebaseReducer,
});

export default rootReducer;
