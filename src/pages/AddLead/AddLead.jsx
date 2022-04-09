import { useNavigate } from 'react-router-dom';

import {  Button, Container, Grid, Typography } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Formik, Form } from 'formik';

import  Opportunities  from '../../components/opportunities/Opportunities';
import LeadFields from '../../components/leadFields/LeadFields';


function AddLead() {

    const navigate = useNavigate();
    const goBack = () => {
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
                    <Formik initialValues={{
                        name: '',
                        phone: '',
                        email: '',
                        all: false,
                        rpa: false,
                        digitalProduct: false,
                        analytics: false,
                        bpm: false,
                    }}>
                        {() => (

                            <Form style = {{width: '100%'}}>
                                <Grid container spacing={2} justifyContent="space-between">
                                    
                                    <Grid container spacing={3} item xs={12} sm={8} md={5}> 

                                        <LeadFields/>

                                    </Grid>

                                    <Grid item xs={12} sm={4}>

                                        <Opportunities/>

                                    </Grid>

                                    <Grid container alignItems='center' justifyContent='center' item xs={12}>
                                        <Grid item xs={4}>
                                            <Button
                                                type="submit"
                                                variant="contained"
                                                color="primary"
                                                fullWidth
                                                >
                                                SALVAR
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