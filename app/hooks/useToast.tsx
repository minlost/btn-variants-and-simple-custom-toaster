import { ToastContext } from "@/components/Toast";
import { useContext } from "react";

const useToast = () => {
  const context = useContext(ToastContext);

  if (context === undefined) {
    throw new Error("useToast must be used within a ToastProvider");
  }

  const { state, dispatch } = context;

  const addToast = (message: string, options: object = {}) => {
    dispatch({
      type: "ADD_TOAST",
      payload: { message, ...options },
    });
    setTimeout(() => {
      dispatch({ type: "REMOVE_TOAST" });
    }, 3000);
  };

  const removeToast = () => {
    dispatch({ type: "REMOVE_TOAST" });
  };

  return {
    toasts: state,
    addToast,
    removeToast,
  };
};

export default useToast;
