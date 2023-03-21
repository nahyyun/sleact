import Modal from '@components/common/Modal';
import useAuth from '@hooks/useAuth';
import useModal from '@hooks/useModal';
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import * as S from './style';

const Workspaces = () => {
  const { isOpen, openModal, closeModal } = useModal();
  const { user } = useAuth();

  const onCreateWorkspace = () => {
    openModal();
  };

  return (
    <>
      <S.Workspaces>
        {user?.Workspaces?.map((ws) => (
          <NavLink key={ws.id} to={`/workspace/${123}/channel`}>
            <S.WorkspaceButton>{ws.name.slice(0, 1).toUpperCase()}</S.WorkspaceButton>
          </NavLink>
        ))}
        <S.AddButton onClick={onCreateWorkspace}>workspace create</S.AddButton>
      </S.Workspaces>
      <Modal isOpen={isOpen} onCloseModal={closeModal}>
        <span>모달을 띄워봅시다.</span>
      </Modal>
    </>
  );
};

export default Workspaces;
