import { useNavigate } from 'react-router-dom';

import {  Button, Container, Grid, Typography } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Formik, Form } from 'formik';

import  Opportunities  from '../../components/opportunities/Opportunities';
import LeadFields from '../../components/leadFields/LeadFields';
import { submit } from '../../services/leadService'
import dataValidation from './validation';
import initialData from '../../utils/initialData';

function AddLead() {

    const navigate = useNavigate();
    const goBack = () => {
        navigate('/leads');
    }
    
    const defaultValues = initialData.leadForm;

    const handleSubmit = (values, {setSubmitting}) => {
        submit(values, {setSubmitting});
        navigate('/leads');
    }


    return (
        <Container maxWidth="lg"  >

            <Grid container spacing={2} >

                <Grid item xs={12} >
                    <Typography variant="h4">Nova Lead</Typography>
                </Grid>
                

                <Grid item xs={12}>
                    <Button variant="outlined" onClick={goBack}>
                        <ArrowBackIcon />
                        Voltar
                    </Button>
                </Grid>

                <Grid container item xs={12} >
                    <Formik 
                        initialValues={defaultValues}
                        validate={dataValidation}
                        onSubmit={handleSubmit}
                        >
                        {({
                            errors,
                            status,
                            values,
                            touched,
                            submitForm,
                            isSubmitting,
                            setFieldTouched,
                            setFieldValue,
                        }) => (

                            <Form style = {{width: '100%'}}>
                                <Grid container spacing={2} justifyContent="space-between">
                                    
                                    <Grid container spacing={3} item xs={12} sm={8} md={5}> 

                                        <LeadFields
                                            setFieldValue={setFieldValue}
                                        />

                                    </Grid>

                                    <Grid item xs={12} sm={4}>

                                        <Opportunities
                                            errors={errors}
                                            values={values}
                                            touched={touched}
                                            setFieldTouched={setFieldTouched}
                                            status={status}
                                        />

                                    </Grid>

                                    <Grid container alignItems='center' justifyContent='center' item xs={12}>
                                        <Grid item xs={4}>
                                            <Button
                                                type="submit"
                                                variant="contained"
                                                color="primary"
                                                fullWidth
                                                disabled={isSubmitting}
                                                onClick={submitForm}
                                            >
                                                Salvar
                                            </Button>
                                        </Grid>
                                    </Grid>


                                </Grid>
                            </Form>
                        )}
                    </Formik>
                </Grid>
            </Grid>
        </Container>
    )
}

export default AddLead