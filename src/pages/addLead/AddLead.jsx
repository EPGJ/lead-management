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


function AddLead() {

  const navigate = useNavigate();

  const defaultValues = initialState.leadForm;


  const handleSubmit = (values, { setSubmitting }) => {
    setTimeout(() => {
      submit(values, { setSubmitting });
      alert('sucesso ao cadastrar lead!!');
      navigate('/leads');
    }, 500);
  }

  return (
    <Container component="main" maxWidth="xs">

      <Box
        sx={{
          marginTop: 8,
          marginBottom: 2,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >


        <Typography component="h1" variant="h5">Novo Lead</Typography>

        <Formik
          initialValues={defaultValues}
          validate={dataValidation}
          onSubmit={(values, { setSubmitting }) =>
            handleSubmit(values, { setSubmitting })
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
              <Grid
                container
                alignItems="center"
                justifyContent="center"
                spacing={2}
                item
              >

                <Grid container spacing={3}  sm={8} >

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
                  alignItems="center"
                  justifyContent="center"
                  item
                  xs={12}
                >

                  <Grid item xs={8}>
                    <Button variant="outlined" onClick={() => navigate('/leads')}>
                      <ArrowBackIcon />
                      Voltar
                    </Button>
                  </Grid>

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


      </Box>
    </Container>
  );
};

export default AddLead