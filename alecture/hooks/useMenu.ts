import React, { useState } from 'react';

const useMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openMenu = () => {
    setIsOpen(true);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return { isOpen, openMenu, closeMenu };
};

export default useMenu;
