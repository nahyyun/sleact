import InputWithLabel from '@components/common/InputWithLabel';
import { Modal } from '@components/common/Modal';
import React from 'react';
import { useForm } from 'react-hook-form';
import useWorkspace from '@hooks/useWorkspace';
import Button from '@components/common/Button';

interface InviteWorkspaceModalProps {
  workspace: string;
  isOpen: boolean;
  onCloseModal: () => void;
}

const InviteWorkspaceModal = ({ workspace, isOpen, onCloseModal }: InviteWorkspaceModalProps) => {
  const { register, handleSubmit } = useForm({
    mode: 'onSubmit',
    defaultValues: { email: '' },
  });

  const { inviteWorkspace } = useWorkspace();

  const onSubmit = handleSubmit((formData) => {
    inviteWorkspace(workspace, formData);
    onCloseModal();
  });

  const inviteWorkspaceRegister = register('email', {
    required: { value: true, message: '초대할 멤버의 이메일을 입력해주시기 바랍니다.' },
  });

  return (
    <Modal isOpen={isOpen} onCloseModal={onCloseModal}>
      <form onSubmit={onSubmit}>
        <InputWithLabel labelId="member-label" title="이메일" type="email" id="email" {...inviteWorkspaceRegister} />
        <Button type="submit">초대하기</Button>
      </form>
    </Modal>
  );
};

export default InviteWorkspaceModal;
