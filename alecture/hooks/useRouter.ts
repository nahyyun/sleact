import React from 'react';
import { useNavigate } from 'react-router-dom';

const useRouter = () => {
  const navigate = useNavigate();

  const routeTo = (path: string) => {
    navigate(path);
  };
  return { routeTo };
};

export default useRouter;
