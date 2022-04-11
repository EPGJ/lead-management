import checkRequired from '../../utils/checkRequired';
import passwordValidation from '../../utils/passwordValidation';


export const validateLoginForm = (values) => {
    const errors = {};
    const requiredFields = ['username', 'password'];
  
    checkRequired(values, errors, requiredFields);
    passwordValidation(values, errors);
  
    return errors;
  };
  
  export default validateLoginForm;