import { useRef, useEffect } from 'react';
import { useOnLeaveInput } from './useOnLeave.hook';

export const useStepperFormChild = ({ initialState, setParentState, step }) => {
  const [formState, onBlur] = useOnLeaveInput(initialState);
  const stateRef = useRef(formState);

  useEffect(() => {
    // keep state ref up to date
    stateRef.current = formState;
  }, [formState]);

  useEffect(() => {
    return () => {
      // use stateRef instead of formState to avoid cleaning on formState changes
      // this way it only cleans on unmount
      setParentState(step, stateRef.current);
    };
  }, [step, setParentState]);

  return onBlur;
};
