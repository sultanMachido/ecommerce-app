"use client";
import { store } from "@/store/";
import { ReactNode } from "react";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { persistor } from "@/store";

type ReduxToolKitProviderProps = {
  children: ReactNode;
};

const ReduxToolKitProvider = ({ children }: ReduxToolKitProviderProps) => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        {children}
      </PersistGate>
    </Provider>
  );
};

export default ReduxToolKitProvider;
