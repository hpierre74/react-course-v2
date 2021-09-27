import React, { memo } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import AddressForm from './components/addressForm.component';
import PaymentForm from './components/paymentForm.component';
import Review from './components/review.component';
import { useStepperForm } from '../../hooks/useStepperForm.hook';
import { SHIPPING, PAYMENT, REVIEW, steps } from './checkout.constants';

const useStyles = makeStyles(theme => ({
  appBar: {
    position: 'relative',
    borderBottom: `1px solid ${theme.palette.divider}`,
  },
  main: {
    marginBottom: theme.spacing(4),
  },
  paper: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
    padding: theme.spacing(2),
    [theme.breakpoints.up('md')]: {
      marginTop: theme.spacing(4),
      marginBottom: theme.spacing(4),
      padding: theme.spacing(3),
    },
  },
  stepper: {
    padding: theme.spacing(3, 0, 5),
  },
  buttons: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
  button: {
    marginTop: theme.spacing(3),
    marginLeft: theme.spacing(1),
  },
}));

function getStepContent(step, [formState, setFormState]) {
  switch (step) {
    case SHIPPING:
      return (
        <AddressForm
          initialState={formState[SHIPPING]}
          step={step}
          setParentState={setFormState}
        />
      );
    case PAYMENT:
      return (
        <PaymentForm
          initialState={formState[PAYMENT]}
          step={step}
          setParentState={setFormState}
        />
      );
    case REVIEW:
      return (
        <Review
          formKey={SHIPPING}
          step={step}
          formState={formState}
          setParentState={setFormState}
        />
      );
    default:
      throw new Error('Unknown step');
  }
}

export const initialFormState = {
  [SHIPPING]: {},
  [PAYMENT]: {},
  [REVIEW]: {},
};

function Checkout() {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const stepperForm = useStepperForm(initialFormState);

  const handleNext = () => {
    setActiveStep(activeStep + 1);
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  return (
    <Container
      component="main"
      className={classes.main}
      maxWidth="md"
      data-testid="checkout"
    >
      <Paper className={classes.paper} variant="outlined">
        <Typography component="h1" variant="h4" align="center">
          Checkout
        </Typography>
        <Stepper activeStep={activeStep} className={classes.stepper}>
          {steps.map(label => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>
        {activeStep === steps.length ? (
          <React.Fragment>
            <Typography variant="h5" gutterBottom>
              Thank you for your order.
            </Typography>
            <Typography variant="subtitle1">
              Your order number is #2001539. We have emailed your order
              confirmation, and will send you an update when your order has
              shipped.
            </Typography>
          </React.Fragment>
        ) : (
          <React.Fragment>
            {getStepContent(steps[activeStep], stepperForm)}
            <div className={classes.buttons}>
              {activeStep !== 0 && (
                <Button onClick={handleBack} className={classes.button}>
                  Back
                </Button>
              )}

              <Button
                name={`next-${activeStep}`}
                variant="contained"
                onClick={handleNext}
                className={classes.button}
              >
                {activeStep === steps.length - 1 ? 'Place order' : 'Next'}
              </Button>
            </div>
          </React.Fragment>
        )}
      </Paper>
    </Container>
  );
}

export default memo(Checkout);
