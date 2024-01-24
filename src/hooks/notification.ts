import { toast } from "react-toastify";

export const useNotification = () => {
  const successNotification = (message: string) => {
    toast.success(message, {
      position: "bottom-right",
    });
  };
  return {
    successNotification,
  };
};
