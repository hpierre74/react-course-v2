import React from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

export default function PaymentForm(props) {
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Payment method
      </Typography>
      <Grid container spacing={3}>
        {/* render inputs here, good luck */}
      </Grid>
    </React.Fragment>
  );
}
