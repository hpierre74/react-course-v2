import { useState, useCallback } from 'react';

export const useStepperForm = initialState => {
  const [formState, setFormState] = useState(initialState);

  const handleNext = useCallback((key, data) => {
    setFormState(prevState =>
      prevState[key] === data ? prevState : { ...prevState, [key]: data },
    );
  }, []);

  return [formState, handleNext];
};
