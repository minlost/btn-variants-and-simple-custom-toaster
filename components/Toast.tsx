"use client";

import { createContext, useReducer, Dispatch } from "react";

interface Toast {
  message: string;
  options?: object;
}

type ToastAction =
  | { type: "ADD_TOAST"; payload: Toast }
  | { type: "REMOVE_TOAST" };

const ToastContext = createContext<
  { state: Toast[]; dispatch: Dispatch<ToastAction> } | undefined
>(undefined);

const toastReducer = (state: Toast[], action: ToastAction): Toast[] => {
  switch (action.type) {
    case "ADD_TOAST":
      return [...state, action.payload];
    case "REMOVE_TOAST":
      const newState = [...state];
      newState.shift();
      return newState;
    default:
      throw new Error(`Unknown action:`);
  }
};

interface ToastProviderProps {
  children: React.ReactNode;
}

const ToastProvider: React.FC<ToastProviderProps> = ({ children }) => {
  const [state, dispatch] = useReducer(toastReducer, []);

  return (
    <ToastContext.Provider value={{ state, dispatch }}>
      {children}
    </ToastContext.Provider>
  );
};

export { ToastContext, ToastProvider };
