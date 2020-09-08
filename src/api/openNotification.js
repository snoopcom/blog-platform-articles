import { notification } from 'antd';

export const openNotificationError = (type) => {
  notification[type]({
    message: 'Error',
    description: ' Неполадки с сетью :(',
  });
};

export const openNotificationSuccess = (type) => {
  notification[type]({
    message: 'Success',
    description: 'Вы успешно зарегистрировались :)',
  });
};
