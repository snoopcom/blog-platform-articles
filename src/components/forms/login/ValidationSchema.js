import * as Yup from 'yup';

const validationSchema = Yup.object({
  email: Yup.string().email('Неккоретный email').required('Пожалуйста, введите почту'),
});

export default validationSchema;
