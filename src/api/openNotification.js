import { notification } from 'antd';

export const openNotificationError = (type) => {
  notification[type]({
    message: 'Notification Title',
    description: 'Неполадки с сетью :(',
  });
};

export const openNotificationSuccess = (type) => {
  notification[type]({
    message: 'Notification Title',
    description: 'Вы успешно зарегистрировались :)',
  });
};
