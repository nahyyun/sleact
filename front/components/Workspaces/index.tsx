import Button from '@components/common/Button';
import InputWithLabel from '@components/common/InputWithLabel';
import { Modal } from '@components/common/Modal';
import useModal from '@hooks/useModal';
import React from 'react';
import { useForm } from 'react-hook-form';
import { NavLink } from 'react-router-dom';
import * as S from './style';
import useWorkspace from '@hooks/useWorkspace';
import useFetch from '@hooks/useFetch';
import { IWorkspace } from '../../types/index';

const Workspaces = () => {
  const { isOpen, openModal, closeModal } = useModal();

  const { fetch, responseData: workspaces } = useFetch<IWorkspace[]>('/workspaces');

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

  const onSubmit = handleSubmit(async (formData) => {
    await createWorkspace(formData);
    fetch();
    closeModal();
  });

  const onCreateWorkspace = () => {
    openModal();
  };

  if (!workspaces) return null;

  return (
    <>
      <S.Workspaces>
        {workspaces?.map((ws) => (
          <NavLink key={ws.id} to={`/workspace/${ws.name}/channel`}>
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
