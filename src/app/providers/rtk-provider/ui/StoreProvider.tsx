import { FC, ReactNode } from "react";
import { Provider } from "react-redux";

import { store } from "../config/root";

type StoreProviderProps = {
  children: ReactNode;
};

export const StoreProvider: FC<StoreProviderProps> = ({ children }) => {
  return <Provider store={store}>{children}</Provider>;
};
