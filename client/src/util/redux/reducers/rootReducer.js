import { combineReducers } from 'redux'
import authReducer from "./authReducer";
import cartReducer from "./cartReducer";
import itemReducer from "./itemReducer";

const rootReducer = combineReducers({
  auth: authReducer,
  cart: cartReducer,
  item: itemReducer,
})


export default rootReducer