import { ReducersMapObject } from "@reduxjs/toolkit";

import { StateSchema } from "./StateSchema";
import { clothingReducer } from "@/entities/clothing";

export const reducers: ReducersMapObject<StateSchema> = {
  clothing: clothingReducer,
};
