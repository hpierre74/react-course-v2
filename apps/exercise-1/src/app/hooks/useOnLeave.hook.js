/* eslint-disable no-unused-vars */
import { useCallback, useState } from 'react';

export const useOnLeaveInput = initialState => {
  const [formState, setFormState] = useState(initialState);

  const onBlur = useCallback(event => {
    const targetName = event.target.name;
    const targetValue = event.target.value;

    setFormState(prevState =>
      prevState[targetName] === targetValue
        ? prevState
        : { ...prevState, [targetName]: targetValue },
    );
  }, []);

  return [formState, onBlur];
};
