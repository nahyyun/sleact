import InputWithLabel from '@components/common/InputWithLabel';
import { Modal } from '@components/common/Modal';
import React from 'react';
import { useForm } from 'react-hook-form';
import Button from '@components/common/Button';
import useChannel from '@hooks/useChannel';

interface InviteChannelModalProps {
  isOpen: boolean;
  onCloseModal: () => void;
}

const InviteChannelModal = ({ isOpen, onCloseModal }: InviteChannelModalProps) => {
  const { register, handleSubmit } = useForm({
    mode: 'onSubmit',
    defaultValues: { email: '' },
  });

  const { inviteChannel } = useChannel();

  const onSubmit = handleSubmit((data) => {
    inviteChannel(data);
    onCloseModal();
  });

  const inviteChannelRegister = register('email', {
    required: { value: true, message: '초대할 멤버의 이름을 입력해주시기 바랍니다.' },
  });

  return (
    <Modal isOpen={isOpen} onCloseModal={onCloseModal}>
      <form onSubmit={onSubmit}>
        <InputWithLabel
          labelId="member-label"
          title="채널 멤버 초대"
          type="text"
          id="member"
          {...inviteChannelRegister}
        />
        <Button type="submit">초대하기</Button>
      </form>
    </Modal>
  );
};

export default InviteChannelModal;
