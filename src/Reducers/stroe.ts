import { configureStore } from "@reduxjs/toolkit";
import CardsSlice from "./cardsSlice";
export const store = configureStore({
  reducer: {
    Cards: CardsSlice,
  },
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
