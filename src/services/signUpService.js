import { signIn } from './authService';

const registerUser = (values) => {
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    const newUser = {
        id: users.length + 1,
        username: values.username,
        password: values.password,
    };
    localStorage.setItem('users', JSON.stringify([...users, newUser]));
};

export const submit = (values, { setSubmitting }) => {
    
    setSubmitting(false);
    registerUser(values);
    console.log('123,')
    signIn(values.username, values.password);
    alert('Login Successful');
      
  };