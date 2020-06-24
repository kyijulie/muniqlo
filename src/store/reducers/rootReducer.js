import { combineReducers } from "redux";
import menuReducer from "./menuReducer";
import authReducer from "./authReducer";
import productReducer from "./productReducer";
import shoppingBagReducer from "./shoppingBagReducer";
import { firestoreReducer } from "redux-firestore";
import { firebaseReducer } from "react-redux-firebase";

const rootReducer = combineReducers({
  auth: authReducer,
  menu: menuReducer,
  product: productReducer,
  shoppingbag: shoppingBagReducer,
  firestore: firestoreReducer,
  firebase: firebaseReducer,
});

export default rootReducer;
