import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./slice/cartSlice";
import artReducer from "./slice/artSlice";
import portraitReducer from "./slice/portraitSlice";
import authReducer from "./slice/userSlice";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    auth: authReducer,
    portrait: portraitReducer,
    art: artReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
