import { TextField } from 'formik-mui';
import { Field } from 'formik';
import { Grid } from '@mui/material';

function LeadFields() {
  return (
    <>
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
    </>
  )
}

export default LeadFields