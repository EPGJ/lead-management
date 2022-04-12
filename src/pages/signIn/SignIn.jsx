import { useNavigate } from 'react-router-dom';

import {
  Avatar,
  Button,
  Link,
  Grid,
  Box,
  Typography,
  Paper,
  Container,
  createTheme,
  LinearProgress,
} from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { Formik, Form, Field } from 'formik';
import { TextField } from 'formik-mui';

import validateLoginForm from './validation';
import { signIn } from '../../services/authService';
import Image from '../../assets/banner.jpg';
import { toast } from 'react-toastify';

export default function SignIn() {

  const navigate = useNavigate();



  const handleSubmit = (values, { setSubmitting }) => {
    setTimeout(() => {
      setSubmitting(false);
      try {
        signIn(values.username, values.password);
        navigate('/leads');
        toast.success('Login realizado com sucesso!', {
          theme: "colored"
        });
      } catch (error) {
        toast.error('Erro ao realizar login', {
          theme: "colored"
        });
      }
    }, 500);
  };

  return (
    <>
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
        </Grid>
      </Grid>






{/* 
      <Container component="main" maxWidth="xs">
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >

        </Box>
      </Container> */}
    </>
  );
}