import { configureStore } from "@reduxjs/toolkit";
import tasksReducer from "./reducers/tasksReducer";
import modalReducer from "./reducers/modalReducer";
export let store = configureStore({
  reducer: {
    tasks: tasksReducer,
    modal: modalReducer,
    //...other reducers
  },
});
