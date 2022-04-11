import checkRequired from '../../utils/checkRequired';

const validatePassword = (values, errors) => {
    if (
        !/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*+-~´`.])(?=.{8,})/.test(
            values.password
        ) &&
        values.password
    )
        errors.password = 'Password inválido';
};

export const validationFormRegister = (values) => {
    const errors = {};
    const requiredFields = ['username', 'password', 'passwordConfirm'];
    
    checkRequired(values, errors, requiredFields);
    validatePassword(values, errors);

    if (values.password !== values.passwordConfirm)
        errors.passwordConfirm = 'Passwords devem ser iguais';

    return errors;
};
