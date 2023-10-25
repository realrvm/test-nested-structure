import { useEffect } from "react";
import { Outlet, useLoaderData } from "react-router-dom";

import { ClothingSchema } from "@/entities/clothing/model/types";
import { useActionCreators } from "@/app/providers/rtk-provider";
import { clothingActions } from "@/entities/clothing";

export const AppRouter = () => {
  const { categories } = useLoaderData() as {
    categories: Array<ClothingSchema>;
  };

  const category = categories[0];

  const clothingAction = useActionCreators(clothingActions);

  useEffect(() => {
    clothingAction.addClothing(category);
  }, [category]);

  return <Outlet />;
};
