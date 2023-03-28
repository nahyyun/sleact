import React, { Dispatch, SetStateAction, useState } from 'react';

const useInput = <T>(
  defaultValue: T | (() => T),
): [T, (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void, Dispatch<SetStateAction<T>>] => {
  const [state, setState] = useState(defaultValue);

  const onChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setState(event.target.value as unknown as T);
  };

  return [state, onChange, setState];
};

export default useInput;
