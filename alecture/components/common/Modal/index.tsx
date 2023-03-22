import React from 'react';
import Button from '../Button';
import Portal from '../Portal';
import * as S from './style';

interface ModalProps {
  children: React.ReactNode;
  isOpen: boolean;
  onCloseModal: () => void;
}

const Header = ({ children }: { children: React.ReactNode }) => {
  return <S.ModalHeader>{children}</S.ModalHeader>;
};

const Dialog = ({ children }: { children: React.ReactNode }) => {
  return <S.ModalDialog>{children}</S.ModalDialog>;
};

const ModalWrapper = ({ children, isOpen, onCloseModal }: ModalProps) => {
  if (!isOpen) return null;

  const modalRootElement = document.getElementById('modal-root')!;

  return (
    <Portal targetElement={modalRootElement}>
      <S.Dimmer onClick={onCloseModal} />
      <S.ModalContainer>
        <Button onClick={onCloseModal}>X</Button>
        {children}
      </S.ModalContainer>
    </Portal>
  );
};

export const Modal = Object.assign(ModalWrapper, {
  Header,
  Dialog,
});
