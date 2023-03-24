import React, { useEffect, useState } from 'react';

const useModal = (immediate?: boolean) => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    if (!immediate) return;

    openModal();
  }, []);

  return { isOpen, openModal, closeModal };
};

export default useModal;
