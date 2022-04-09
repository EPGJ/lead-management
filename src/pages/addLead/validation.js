import checkRequired from '../../utils/checkRequired';
const dataValidation = (values) => {
    const errors = {};
    const requiredFields = ['name', 'phone', 'email'];

    checkRequired(values, errors, requiredFields);

    if (!Object.values(values).includes(true))
        errors.opportunities = 'Obrigatório';

    if (
        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email) &&
        values.email
    )
        errors.email = 'Email inválido';

    if (values.phone.length < 14 && values.phone)
        errors.phone = 'Telefone inválido';

    return errors;
};

export default dataValidation;