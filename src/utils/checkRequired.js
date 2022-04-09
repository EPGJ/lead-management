const checkRequired = (values, errors, requiredFields) => {
    requiredFields.forEach((field) => {
      if (!values[field]) {
        errors[field] = 'Obrigatório';
      }
    });
  };

export default checkRequired;