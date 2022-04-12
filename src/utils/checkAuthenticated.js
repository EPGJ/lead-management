
export const checkAuthenticated = (navigate) => {
    const user = localStorage.getItem('user');
    if (!user) {
        navigate('/signin');
    }
}