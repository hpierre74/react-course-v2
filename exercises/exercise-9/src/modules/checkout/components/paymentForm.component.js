import React from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

const INPUTS_CONFIG = {
  cardName: {
    props: {
      autoComplete: 'cc-name',
      label: 'Name on card',
    },
    gridProps: { xs: 12, sm: 6 },
  },
  cardNumber: {
    props: {
      label: 'Card number',
      autoComplete: 'cc-number',
    },
    gridProps: { xs: 12, sm: 6 },
  },
  expDate: {
    props: { autoComplete: 'cc-exp', label: 'Expiry date' },
    gridProps: { xs: 12, sm: 6 },
  },
  cvv: {
    props: {
      label: 'CVV',
      helperText: 'Last three digits on signature strip',
      autoComplete: 'cc-csc',
    },
    gridProps: { sm: 6, xs: 12 },
  },
};

// eslint-disable-next-line
export default function PaymentForm(props) {
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Payment method
      </Typography>
      <Grid container spacing={3}>
        {/* render inputs here, good luck */}
        <Grid item xs={12}>
          <FormControlLabel
            control={<Checkbox color="secondary" name="saveCard" value="yes" />}
            label="Remember credit card details for next time"
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
