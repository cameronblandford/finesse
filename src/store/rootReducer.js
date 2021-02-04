import { combineReducers } from "@reduxjs/toolkit";

import dropsReducer from "./dropsSlice";

const rootReducer = combineReducers({
  drops: dropsReducer,
});

export default rootReducer;
