const passwordValidation = (values, errors) => {
    if (
        !/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/.test(
            values.password
        ) &&
        values.password
    )
        errors.password = 'Password inválido';
};

export default passwordValidation;