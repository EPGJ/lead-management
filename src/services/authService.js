export const signIn = (username, password) => {

    const users = JSON.parse(window.localStorage.getItem('users')) || [];

    if (users) {
        const index = users.findIndex(
            (user) => username === user.username && password === user.password
        );

        if (index !== -1) {
            localStorage.setItem('user', username);
            return;
        }
    }
    throw new Error('Invalid username or password');
};

export const signOut = () => {
    window.localStorage.removeItem('user');
};

const registerUser = (values) => {
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    const newUser = {
        id: users.length + 1,
        username: values.username,
        password: values.password,
    };
    localStorage.setItem('users', JSON.stringify([...users, newUser]));
};

export const submit = (values, { setSubmitting },navigate) => {
    
    setTimeout(() => {
        setSubmitting(false);
        try {
            registerUser(values);
            signIn(values.username, values.password);
            alert('Sucesso!');
            navigate('/leads');
        } catch (error) {
            alert('Erro ao cadastrar');
        }
    }, 500);
      
  };