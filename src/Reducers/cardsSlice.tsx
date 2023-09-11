import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
interface Card {
  id: number;
  learn: string[];
  lang: string[];
  about: string;
  read: string[];
}

interface initialStateType {
  loading: boolean;
  error: string;
  data: Card[];
}
const initialState: initialStateType = {
  loading: false,
  error: "",
  data: [],
};

export const FetchCards = createAsyncThunk("Accounts/FetchCards", async () => {
  const res = await axios.get(`http://localhost:3001/cards`);
  return res.data;
});

export const cardsSlice = createSlice({
  name: "cardsSlice",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(FetchCards.fulfilled, (state, { payload }) => {
      state.loading = false;
      state.data = [...payload];
    });
    builder.addCase(FetchCards.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(FetchCards.rejected, (state, { error }) => {
      state.loading = false;
      state.error = error.message || "Error";
    });
  },
});

export const {} = cardsSlice.actions;
export default cardsSlice.reducer;
