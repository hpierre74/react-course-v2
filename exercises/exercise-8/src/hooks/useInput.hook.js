import { useState } from 'react';

export const useInput = () => {
  const [inputValue, setInputValue] = useState('');

  const handleChange = e => setInputValue(e.target.value);

  return [inputValue, handleChange];
};
