import { configureStore } from "@reduxjs/toolkit";
import { userApi } from "./features/api/userApiSlice";

export const store = configureStore({
  devTools: true,
  reducer: {
    [userApi.reducerPath]: userApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(userApi.middleware),
});
