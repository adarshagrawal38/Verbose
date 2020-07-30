import { combineReducers } from "redux";

const DEFAULT_REDUCER = (initstate, action) => {
  return {
    DEFAULT: "Hello world",
  };
};
const rootReducer = combineReducers({
  DEFAULT: DEFAULT_REDUCER,
});

export default rootReducer;
