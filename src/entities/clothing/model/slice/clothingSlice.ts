import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { ClothingSchema } from "../types";

const initialState: ClothingSchema = {
  id: 0,
  slug: "",
  index: false,
  name: "",
  children: null,
};

const clothingSlice = createSlice({
  name: "clothing",
  initialState,
  reducers: {
    addClothing: (state, action: PayloadAction<ClothingSchema>) => {
      state.id = action.payload.id;
      state.slug = action.payload.slug;
      state.index = action.payload.index;
      state.name = action.payload.name;
      state.children = action.payload.children;
    },
  },
});

export const { reducer: clothingReducer, actions: clothingActions } =
  clothingSlice;
