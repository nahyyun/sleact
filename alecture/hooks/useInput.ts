import React, { useState } from 'react';

const useInput = <T>(defaultValue: T) => {
  const [state, setState] = useState(defaultValue);

  const onChange = (value: React.SetStateAction<T>) => {
    setState(value);
  };

  return [state, onChange, setState];
};

export default useInput;
