import { message } from "antd";

const toastConfig = {
  duration: 2, 
  top: 50, 
};

export const successToast = (msg: string) => {
  message.success(msg, toastConfig.duration);
};

export const errorToast = (msg: string) => {
  message.error(msg, toastConfig.duration);
};

export const warningToast = (msg: string) => {
  message.warning(msg, toastConfig.duration);
};

export const infoToast = (msg: string) => {
  message.info(msg, toastConfig.duration);
};
