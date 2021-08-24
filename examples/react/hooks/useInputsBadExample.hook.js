import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

import { useInput } from './useInput.hook';

export const useUseInput = () => {
  const [value, set] = useInput();

  return { value, onChange: set };
};

const useInputGroupReducer = (acc, current) => ({
  ...acc,
  [current]: useUseInput(),
});

const emptyObject = {};

export const useInputs = inputNamesList => {
  // Here we are defeating the eslint rule "React Hook '***' cannot be called inside a callback."
  // because we pass useInputGroupReducer by reference, thus the linter doesn't know it is a callback using a hook.
  return inputNamesList.reduce(useInputGroupReducer, emptyObject);
};

const INPUTS_CONFIG = {
  firstName: {
    props: { autoComplete: 'given-name', label: 'First name' },
    gridProps: { xs: 12, sm: 6 },
  },
  lastName: {
    props: { autoComplete: 'family-name', label: 'Last name' },
    gridProps: { xs: 12, sm: 6 },
  },
  address1: {
    props: { autoComplete: 'shipping-address line-1', label: 'Address line 1' },
    gridProps: { xs: 12 },
  },
  address2: {
    props: { autoComplete: 'shipping-address line-2', label: 'Address line 2' },
    gridProps: { xs: 12 },
  },
  city: {
    props: { autoComplete: 'shipping address-level2', label: 'City' },
    gridProps: { sm: 6, xs: 12 },
  },
  state: {
    props: { label: 'Region/State' },
    gridProps: { sm: 6, xs: 12 },
  },
  zip: {
    props: { autoComplete: 'shipping postal-code', label: 'Zip code' },
    gridProps: { sm: 6, xs: 12 },
  },

  country: {
    props: { autoComplete: 'shipping country', label: 'Country code' },
    gridProps: { xs: 12, sm: 6 },
  },
};

export default function AddressForm() {
  // any input update will result in the whole children being re-rendered, that's evil
  const inputs = useInputs(Object.keys(INPUTS_CONFIG));

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Shipping address
      </Typography>
      <Grid container spacing={3}>
        {Object.keys(inputs).map(inputName => (
          <Grid key={inputName} item {...INPUTS_CONFIG[inputName].gridProps}>
            <TextField
              required
              id={inputName}
              name={inputName}
              variant="standard"
              fullWidth
              {...INPUTS_CONFIG[inputName].props}
              {...inputs[inputName]}
            />
          </Grid>
        ))}
        <Grid item xs={12}>
          <FormControlLabel
            control={<Checkbox color="secondary" name="saveAddress" value="yes" />}
            label="Use this address for payment details"
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
