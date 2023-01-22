import { configureStore } from "@reduxjs/toolkit";
import { userReducer } from "./Reducers/userReducer";

const store = configureStore({
  reducer: {
    user: userReducer,
  },
});

export default store;

export const server = "http://localhost:8000/api/v1";
// export const server = "https://mernstack-ueiy.onrender.com/api/v1";
