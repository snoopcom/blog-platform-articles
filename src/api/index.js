import axios from 'axios';

axios.defaults.baseURL = 'https://conduit.productionready.io/api/';

/* запрос на регистрацию */
export const signUp = async ({ username, email, password }) => {
  try {
    await axios.post('/users', {
      user: {
        username,
        email,
        password,
      },
    });
    alert('Вы успешно зарегистрированы');
  } catch (error) {
    alert('Такой пользователь существует');
  }
};

/* запрос на авторизацию */
export const login = async ({ email, password }) => axios.post('/users/login', {
  user: {
    email,
    password,
  },
});
