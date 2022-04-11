import { useNavigate } from 'react-router-dom';

import {  Button, Container, Grid, Typography,Box } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Formik, Form, Field } from 'formik';
import { TextField } from 'formik-mui';

import  Opportunities  from '../../components/opportunities/Opportunities';
import LeadFields from '../../components/leadFields/LeadFields';
import { submit } from '../../services/leadService'
import dataValidation from './validation';
import initialData from '../../utils/initialData';
import phoneMask from '../../utils/phoneMask';


function AddLead() {

    const navigate = useNavigate();
    const goBack = () => {
        navigate('/leads');
    }
    
    const defaultValues = initialData.leadForm;

    const handleSubmit = (values, {setSubmitting}) => {
        setTimeout(() => {
            submit(values, {setSubmitting});
            alert('sucesso ao cadastrar lead!!');
            navigate('/leads');
        }, 500);
    }

    return (
        <Container maxWidth="lg"  >
            <Box
                sx={{
                marginTop: 8,
                marginBottom: 2,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                }}
            >

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

                                            {/* <LeadFields
                                                setFieldValue={setFieldValue}
                                            /> */}
                                            <Grid item xs={12} container>
                                                <label htmlFor='name'>Nome *</label>
                                                <Field
                                                    component={TextField}
                                                    name="name"
                                                    type="text"
                                                    id="name"
                                                    fullWidth
                                                    required
                                                />
                                            </Grid>
                                            <Grid item xs={12}>
                                                <label htmlFor='phone'>Telefone *</label>
                                                <Field
                                                    component={TextField}
                                                    name="phone"
                                                    type="text"
                                                    id="phone"
                                                    onChange={(event)=>setFieldValue('phone', phoneMask(event.target.value))}
                                                    fullWidth
                                                    required
                                                />
                                            </Grid>
                                            <Grid item xs={12}>
                                                <label htmlFor='email'>Email *</label>
                                                <Field
                                                    component={TextField}
                                                    name="email"
                                                    type="email"
                                                    id="email"
                                                    fullWidth
                                                    required
                                                />
                                            </Grid>

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
            </Box>
        </Container>
    )
}

export default AddLead