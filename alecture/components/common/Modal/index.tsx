import React from 'react';
import Portal from '../Portal';

interface ModalProps {
  children: React.ReactNode;
  isOpen: boolean;
  onCloseModal: () => void;
}

const Modal = ({ children, isOpen, onCloseModal }: ModalProps) => {
  const modalRootElement = document.getElementById('modal-root')!;

  return <Portal targetElement={modalRootElement}>{isOpen && <div>{children}</div>}</Portal>;
};

export default Modal;
