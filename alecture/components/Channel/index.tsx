import React from 'react';
import * as S from './style';
import useModal from '@hooks/useModal';
import { Modal } from '@components/common/Modal';

const Channel = () => {
  const { isOpen, openModal, closeModal } = useModal();

  return (
    <>
      <S.Channels>
        <S.WorkspaceName onClick={openModal}>Sleact</S.WorkspaceName>
        <S.MenuScroll>menu scroll</S.MenuScroll>
      </S.Channels>
      <Modal isOpen={isOpen} onCloseModal={closeModal}>
        <Modal.Header>채널 생성</Modal.Header>
      </Modal>
    </>
  );
};

export default Channel;
