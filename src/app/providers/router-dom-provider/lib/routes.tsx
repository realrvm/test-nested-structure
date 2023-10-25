import App from "@/app/App";
import { createBrowserRouter } from "react-router-dom";

import { loader as AppLoader } from "@/shared/api/loader";
import { Category } from "@/pages/category";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    loader: AppLoader,
    children: [
      {
        path: "/:slug",
        element: <Category />,
      },
    ],
  },
]);
