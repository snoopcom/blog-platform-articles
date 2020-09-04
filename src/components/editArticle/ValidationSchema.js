import * as Yup from 'yup';

const validationSchema = Yup.object().shape({
  title: Yup.string(),
  description: Yup.string(),
  body: Yup.string(),
});

export default validationSchema;
