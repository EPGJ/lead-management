

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
    setTimeout(() => {
        setSubmitting(false);
        registerUser(values);
        signIn(values.username, values.password);
      }, 500);
};
