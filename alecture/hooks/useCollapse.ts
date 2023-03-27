import React, { useState } from 'react';

const useCollapse = () => {
  const [collapse, setCollapse] = useState(true);

  const toggleCollapse = () => {
    setCollapse((prevCollapse) => !prevCollapse);
  };

  return { collapse, toggleCollapse };
};

export default useCollapse;
