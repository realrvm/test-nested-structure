import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";

import { StoreProvider } from "./app/providers/rtk-provider";
import { routes } from "./app/providers/router-dom-provider";

import "@/app/styles/index.scss";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <StoreProvider>
    <RouterProvider router={routes} />
  </StoreProvider>,
);
