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

    