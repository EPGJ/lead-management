import { TextField } from 'formik-mui';
import { Field } from 'formik';
import { Grid } from '@mui/material';

import phoneMask from '../../utils/phoneMask';

function LeadFields({setFieldValue}) {

    // const handlePhoneFormat = (event) => {
    //     setFieldValue('phone', phoneMask(event.target.value))
    // }

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
                    // onChange={handlePhoneFormat}
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