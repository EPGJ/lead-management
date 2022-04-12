import { useNavigate } from 'react-router-dom';

import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { Field, Formik, Form } from 'formik';
import { TextField } from 'formik-mui';
import {
  Avatar,
  Button,
  Link,
  LinearProgress,
  Grid,
  Box,
  Paper,
  Typography,
} from '@mui/material';

import { validationFormRegister } from './validation';
import { submit } from '../../services/signUpService'
import Image from '../../assets/banner.jpg';

export default function SignUp() {

  const navigate = useNavigate();


  const handleSubmit = (values, { setSubmitting }) => {

    submit(values, { setSubmitting });
    navigate('/leads');

  };


  return (

    <Grid container component="main" sx={{ height: '100vh' }}>
      <Grid
        item
        xs={false}
        sm={4}
        md={7}
        sx={{
          backgroundImage: `url(${Image})`,
          backgroundRepeat: 'no-repeat',
          backgroundColor: (t) =>
            t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <Box
          sx={{
            my: 8,
            mx: 4,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >

          <Avatar sx={{ m: 1, bgcolor: '' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Cadastre-se
          </Typography>

          <Formik
            initialValues={{
              username: '',
              password: '',
              passwordConfirm: '',
            }}
            validate={validationFormRegister}
            onSubmit={(values, { setSubmitting }) =>
              handleSubmit(values, { setSubmitting })
            }
          >
            {({ submitForm, isSubmitting }) => (
              <Form>
                <Grid
                  container
                  alignItems="center"
                  justifyContent="center"
                  spacing={2}
                  item
                >

                  <Grid item xs={10}>
                    <label htmlFor='name'>Usuário *</label>
                    <Field
                      component={TextField}
                      name="username"
                      type="text"
                      id="username"
                      label=""
                      fullWidth
                      required
                    />
                  </Grid>

                  <Grid item xs={10}>
                    <label htmlFor='password'>Password *</label>
                    <Field
                      component={TextField}
                      type="password"
                      name="password"
                      id="password"
                      fullWidth
                      required
                    />
                  </Grid>

                  <Grid item xs={10}>
                    <label htmlFor='passwordConfirm'>Confirmação Password *</label>
                    <Field
                      component={TextField}
                      type="password"
                      name="passwordConfirm"
                      id="passwordConfirm"
                      fullWidth
                      required
                    />
                  </Grid>
                  {isSubmitting && <LinearProgress />}

                  <Grid item xs={10}>
                    <Button
                      type="submit"
                      variant="contained"
                      sx={{ mt: 3, mb: 2 }}
                      fullWidth
                      disabled={isSubmitting}
                      onClick={submitForm}
                    >
                      Registrar
                    </Button>

                    <Grid item>
                      <Link href="#" variant="body2" onClick={() => navigate('/signIn')} >
                        {"Já possui uma conta? faça login"}
                      </Link>
                    </Grid>

                  </Grid>
                </Grid>
              </Form>
            )}
          </Formik>

        </Box>
      </Grid>
    </Grid>
  );
}