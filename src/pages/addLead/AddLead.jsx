import { useNavigate } from 'react-router-dom';

import { Button, Container, Grid, Typography, Box } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Formik, Form, Field } from 'formik';
import { TextField } from 'formik-mui';
import { toast } from 'react-toastify';

import Opportunities from '../../components/opportunities/Opportunities';
import { submit } from '../../services/leadService'
import dataValidation from './validation';
import initialState from '../../utils/initialState';
import phoneMask from '../../utils/phoneMask';
import Image from '../../assets/logo3.svg';

function AddLead() {

  const navigate = useNavigate();
  const defaultValues = initialState.leadForm;


  return (
    <Container maxWidth="lg">
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Grid container spacing={2}>

          <Grid container item  justifyContent="space-between">

            <Grid item  xs={3} sm={4}>
              <img src={Image} alt="logo" />
            </Grid>

            <Grid item xs={9} sm={8} style={{marginTop: '1rem'}}>
              <Typography component="h1" variant="h5">Novo Lead</Typography>
            </Grid>

          </Grid>


          <Grid item xs={12}>
            <Button variant="outlined" onClick={() => navigate('/leads')}>
              <ArrowBackIcon />
              Voltar
            </Button>
          </Grid>

          <Grid container item xs={12}>
            <Formik
              initialValues={defaultValues}
              validate={dataValidation}
              onSubmit={(values, { setSubmitting }) =>
                submit(values, { setSubmitting }, navigate)
              }
            >
              {({
                submitForm,
                isSubmitting,
                errors,
                values,
                touched,
                status,
                setFieldTouched,
                setFieldValue,
              }) => (
                <Form style={{ width: '100%' }}>
                  <Grid container spacing={2} justifyContent="space-between">
                    <Grid container spacing={3} item xs={12} sm={8} md={5}>
                      <Grid item xs={12} >
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
                          onChange={(event) => setFieldValue('phone', phoneMask(event.target.value))}
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
                    <Grid
                      container
                      alignItems="right"
                      justifyContent="right"
                      item
                      xs={12}
                    >
                      <Grid item xs={4}>
                        <Button
                          type="submit"
                          variant="contained"
                          color="primary"
                          disabled={isSubmitting}
                          onClick={submitForm}
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
      </Box>
    </Container>
  );
};

export default AddLead