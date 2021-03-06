import checkRequired from '../../utils/checkRequired';
import passwordValidation from '../../utils/passwordValidation';

export const validationFormRegister = (values) => {
    const errors = {};
    const requiredFields = ['username', 'password', 'passwordConfirm'];
    
    checkRequired(values, errors, requiredFields);
    passwordValidation(values, errors);

    if (values.password !== values.passwordConfirm)
        errors.passwordConfirm = 'Passwords devem ser iguais';

    return errors;
};
