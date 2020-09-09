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

export const openNotificationWarning = (type) => {
  notification[type]({
    message: 'Warning',
    description: 'Неверный адрес email или пароль :|',
  });
};

export const openNotificationInfo = (type) => {
  notification[type]({
    message: 'Info',
    description: 'Такой пользователь уже существует',
  });
};
