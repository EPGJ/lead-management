import { toast } from 'react-toastify';

const parseOpportunities = (values) => {
    const opportunities = [];
    Object.keys(values).forEach((key) => {
        if (values[key] === true && key !== 'all') opportunities.push(key);
    });
    return opportunities;
};

export const submit = (values, { setSubmitting },navigate) => {
    
    setTimeout(() => {
        setSubmitting(false);
        let leads = JSON.parse(window.localStorage.getItem('leads') ?? '[]');
        try {
            leads = [
                ...leads,
                {
                    id: leads.length + 1,
                    name: values.name,
                    phone: values.phone,
                    email: values.email,
                    status: 'Cliente em Potencial',
                    opportunities: parseOpportunities(values),
                },
            ];
            window.localStorage.setItem('leads', JSON.stringify(leads));
            navigate('/leads');
            toast.success('Lead cadastrado com sucesso!', {
                theme: "colored"
              });
        } catch (error) {
            toast.error('Erro ao cadastrar lead', {
                theme: "colored"
              });
        }
    }, 500);
      
  };