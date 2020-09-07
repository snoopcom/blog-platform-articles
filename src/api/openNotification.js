import { notification } from 'antd';

export const openNotificationError = (type) => {
  notification[type]({
    message: 'Неполадки с сетью',
    description: ':(',
  });
};

export const openNotificationSuccess = (type) => {
  notification[type]({
    message: 'Вы успешно зарегистрировались',
    description: ':)',
  });
};
