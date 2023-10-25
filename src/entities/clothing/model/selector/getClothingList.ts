import { StateSchema } from "@/app/providers/rtk-provider";

export const getClothingList = (state: StateSchema) => state.clothing;
