import Button from '@components/common/Button';
import InputWithLabel from '@components/common/InputWithLabel';
import { Modal } from '@components/common/Modal';
import useAuth from '@hooks/useAuth';
import useModal from '@hooks/useModal';
import React from 'react';
import { useForm } from 'react-hook-form';
import { NavLink } from 'react-router-dom';
import * as S from './style';
import useWorkspace from '@hooks/useWorkspace';

const Workspaces = () => {
  const { isOpen, openModal, closeModal } = useModal();
  const { user } = useAuth();
  const { createWorkspace } = useWorkspace();

  const { register, handleSubmit } = useForm({
    mode: 'onSubmit',
    defaultValues: { workspace: '', url: '' },
  });

  const workspaceRegister = register('workspace', {
    required: { value: true, message: '워크스페이스 이름을 입력해주시기 바랍니다.' },
  });

  const workspaceUrlRegister = register('url', {
    required: { value: true, message: '워크스페이스 url을 입력해주시기 바랍니다.' },
  });

  const onSubmit = handleSubmit((formData) => {
    createWorkspace(formData);
    closeModal();
  });

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
        <Modal.Dialog>
          <form onSubmit={onSubmit}>
            <InputWithLabel
              labelId="workspace-label"
              title="워크 스페이스 이름"
              id="workspace"
              type="text"
              {...workspaceRegister}
            />
            <InputWithLabel
              labelId="workspace-url-label"
              title="워크 스페이스 url"
              id="workspace-url"
              type="text"
              {...workspaceUrlRegister}
            />
            <Button type="submit">생성하기</Button>
          </form>
        </Modal.Dialog>
      </Modal>
    </>
  );
};

export default Workspaces;
