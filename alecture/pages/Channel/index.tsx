import InviteChannelModal from '@components/ChannelWrapper/InviteChannelModal';
import Button from '@components/common/Button';
import useModal from '@hooks/useModal';
import React from 'react';
import * as S from './style';
import { useParams } from 'react-router';

const Channel = () => {
  const { isOpen, openModal, closeModal } = useModal();

  const { channel } = useParams();

  return (
    <>
      <S.Header>
        <span># {channel}</span>
        <Button type="button" onClick={openModal}>
          invite
        </Button>
      </S.Header>
      <InviteChannelModal isOpen={isOpen} onCloseModal={closeModal} />
    </>
  );
};

export default Channel;
