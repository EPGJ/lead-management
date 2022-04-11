const passwordValidation = (values, errors) => {
    if (
        !/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*+-~´`.])(?=.{8,})/.test(
            values.password
        ) &&
        values.password
    )
        errors.password = 'Password inválido';
};

export default passwordValidation;