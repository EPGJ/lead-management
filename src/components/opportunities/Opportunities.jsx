import { FormControl, Checkbox, FormGroup, FormControlLabel, Grid, FormLabel } from '@mui/material';

import { HelperText } from './style';
import initialData from '../../utils/initialData';
import { useOpportunities } from '../../hooks/useOpportunities';

const Opportunites = ({ errors, values, touched, setFieldTouched }) => {

  const [checked, setChecked, handleChange] = useOpportunities(initialData.opportunities, values, setFieldTouched);

  const hasError = () => {
    const error1 = !!errors.opportunities && touched.opportunities;
    const error2 = Object.keys(errors).length === 1 && errors.opportunities;
    if (error1 || error2) return true;

    return false;
  };

  return (
    <Grid container item xs={12}>
      <FormControl
        required
        component="fieldset"
        sx={{ m: 3 }}
        variant="standard"
        name="opportunities"
        error={hasError()}
      >
        <FormLabel component="legend">Oportunidades</FormLabel>
        {hasError() && (
          <HelperText>Selecione pelo menos uma oportunidade</HelperText>
        )}
        <FormGroup>
          <FormControlLabel
            label="Todos"
            control={
              <Checkbox
                checked={!Object.values(checked).includes(false)}
                onChange={handleChange}
                name="all"
              />
            }
          />
          <FormControlLabel
            label="RPA"
            control={
              <Checkbox
                checked={checked.rpa}
                onChange={handleChange}
                name="rpa"
              />
            }
          />
          <FormControlLabel
            label="Produto Digital"
            control={
              <Checkbox
                checked={checked.digitalProduct}
                onChange={handleChange}
                name="digitalProduct"
              />
            }
          />
          <FormControlLabel
            label="Analytics"
            control={
              <Checkbox
                checked={checked.analytics}
                onChange={handleChange}
                name="analytics"
              />
            }
          />
          <FormControlLabel
            label="BPM"
            control={
              <Checkbox
                checked={checked.bpm}
                onChange={handleChange}
                name="bpm"
              />
            }
          />
        </FormGroup>
      </FormControl>
    </Grid>
  );
};

export default Opportunites;