import * as Yup from 'yup';

const validationSchema = Yup.object({
  username: Yup.string()
    .max(50, 'Имя должно содержать не более 50 символов')
    .required('Пожалуйста, введите имя'),
  password: Yup.string()
    .matches(
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=(.*[a-zA-Z]){4}).{8,20}$/,
      'Введите от 8 до 40 символов, как минимум одна цифра и одна заглавная буква',
    )
    .required('Пожалуйста, введите пароль'),
  email: Yup.string().email('Неккоретный email').required('Пожалуйста, введите почту'),
});

export default validationSchema;
