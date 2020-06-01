import { combineReducers } from "redux";
import menuReducer from "./menuReducer";
import authReducer from "./authReducer";
import { firestoreReducer } from "redux-firestore";
import { firebaseReducer } from "react-redux-firebase";

const rootReducer = combineReducers({
  auth: authReducer,
  menu: menuReducer,
  firestore: firestoreReducer,
  firebase: firebaseReducer,
});

export default rootReducer;
