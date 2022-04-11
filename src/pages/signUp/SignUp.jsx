import { useNavigate } from 'react-router-dom';

import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { Field, Formik, Form } from 'formik';
import { TextField } from 'formik-mui';
import {
  Avatar,
  Button,
  CssBaseline,
  Link,
  LinearProgress,
  Grid,
  Box,
  Typography,
  Container,
  createTheme,
  ThemeProvider,
} from '@mui/material';

import { validationFormRegister } from './validation';
import { useAuth } from '../../hooks/useAuth';


export default function SignUp() {

  const navigate = useNavigate();
  const theme = createTheme();
  const [user, signIn, signOut] = useAuth();

  const registerUser = (values) => {
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    const newUser = {
      id: users.length + 1,
      username: values.username,
      password: values.password,
    };
    localStorage.setItem('users', JSON.stringify([...users, newUser]));
  };


  const handleSubmit = (values, { setSubmitting }) => {
    setTimeout(() => {
      setSubmitting(false);
      registerUser(values);
      signIn(values.username, values.password);
      alert('Login Successful');
      navigate('/leads');
    }, 500);
  };

 

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
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
                  <Grid item xs={12}>
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
                  <Grid item xs={12}>
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
                  <Grid item xs={12}>
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
                  <Grid item xs={12}>
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
                  </Grid>
                </Grid>
              </Form>
            )}
          </Formik>
          <Grid item>
            <Link href="#" variant="body2" onClick={() => navigate('/signIn')} >
              {"Já possui uma conta? faça login"}
            </Link>
          </Grid>


        </Box>
      </Container>
    </ThemeProvider>
  );
}