import * as Yup from 'yup';

const validationSchema = Yup.object().shape({
  title: Yup.string().required('заполните пожалуйста'),
  description: Yup.string().required('заполните пожалуйста'),
  body: Yup.string().required('заполните пожалуйста'),
  tagList: Yup.array(),
});

export default validationSchema;
