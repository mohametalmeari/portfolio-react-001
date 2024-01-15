import { configureStore } from "@reduxjs/toolkit";
import workReducer from "./features/work/workSlice";

const store = configureStore({
  reducer: {
    work: workReducer,
  },
});

export default store;
