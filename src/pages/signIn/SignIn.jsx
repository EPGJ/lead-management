import { useNavigate } from 'react-router-dom';

import {
  Avatar,
  Button,
  CssBaseline,
  FormControlLabel,
  Checkbox,
  Link,
  Grid,
  Box,
  Typography,
  Container,
  createTheme,
  ThemeProvider,
  LinearProgress,
} from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { Formik, Form, Field } from 'formik';
import { TextField } from 'formik-mui';

import validateLoginForm from './validation';
import { useAuth } from '../../hooks/useAuth';

export default function SignIn() {

  const navigate = useNavigate();
  const [user, signIn, signOut] = useAuth();

  const theme = createTheme();


  const handleSubmit = (values, { setSubmitting }) => {
    setTimeout(() => {
      setSubmitting(false);
      try {
        console.log(values);
        signIn(values.username, values.password);
        navigate('/leads');
        alert('Login Successful');
      } catch (error) {
        alert('erro');
      }
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
            Login
          </Typography>
          <Formik
            initialValues={{
              username: '',
              password: '',
            }}
            validate={validateLoginForm}
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
                  xs={12}
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
                      Entrar
                    </Button>
                    <Grid container>
                      <Grid item>
                        <Link href="#" variant="body2" onClick={() => navigate('/signUp')}>
                          {"Não tem conta? Cadastre-se"}
                        </Link>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </Form>
            )}
          </Formik>

        </Box>
      </Container>
    </ThemeProvider>
  );
}