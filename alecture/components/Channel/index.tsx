import React from 'react';
import * as S from './style';
import useModal from '@hooks/useModal';
import { Modal } from '@components/common/Modal';
import InputWithLabel from '@components/common/InputWithLabel';
import Button from '@components/common/Button';
import { useForm } from 'react-hook-form';
import Menu from '@components/Menu';
import useMenu from '@hooks/useMenu';
import useAuth from '@hooks/useAuth';
import useChannel from '@hooks/useChannel';
import { useParams } from 'react-router-dom';
import useFetch from '@hooks/useFetch';
import { IChannel } from '../../types';
import InviteWorkspaceModal from '@components/Channel/InviteWorkspaceModal';
import InviteChannelModal from '@components/Channel/InviteChannelModal';
import ChannelList from '@components/Channel/ChannelList';

const Channel = () => {
  const { isOpen: isMenuOpen, openMenu: openChannelMenu, closeMenu: closeChannelMenu } = useMenu();
  const {
    isOpen: isCreateChannelModalOpen,
    openModal: openCreateChannelModal,
    closeModal: closeCreateChannelModal,
  } = useModal();
  const { isOpen: isInviteWSModalOpen, openModal: openInviteWSModal, closeModal: closeInviteWSModal } = useModal();

  const { logout } = useAuth();
  const { createChannel } = useChannel();

  const { workspace } = useParams<{ workspace: string }>() as { workspace: string };

  const { fetch, responseData: channels } = useFetch<IChannel[]>(`/workspaces/${workspace}/channels`);

  const { register, handleSubmit } = useForm({
    mode: 'onSubmit',
    defaultValues: { name: '' },
  });

  const channelRegister = register('name', {
    required: { value: true, message: '워크스페이스 이름을 입력해주시기 바랍니다.' },
  });

  const inviteWorkspace = () => {
    openInviteWSModal();
  };

  const onSubmit = handleSubmit(async (formData) => {
    await createChannel(workspace, formData);
    fetch();
    closeCreateChannelModal();
  });

  return (
    <>
      <S.Channels>
        <S.WorkspaceName onClick={openChannelMenu}>Sleact</S.WorkspaceName>
        <S.MenuScroll>
          <Menu isOpen={isMenuOpen} onCloseMenu={closeChannelMenu}>
            <Menu.Items>
              <Menu.Item>
                <Button onClick={inviteWorkspace}>워크 스페이스에 사용자 초대</Button>
              </Menu.Item>
              <Menu.Item>
                <Button onClick={openCreateChannelModal}>채널 만들기</Button>
              </Menu.Item>
              <Menu.Item>
                <Button onClick={logout}>로그아웃</Button>
              </Menu.Item>
            </Menu.Items>
          </Menu>
          <ChannelList channels={channels} />
        </S.MenuScroll>
      </S.Channels>

      <Modal isOpen={isCreateChannelModalOpen} onCloseModal={closeCreateChannelModal}>
        <Modal.Header>채널 생성</Modal.Header>
        <Modal.Dialog>
          <form onSubmit={onSubmit}>
            <InputWithLabel labelId="channel-label" title="채널 이름" id="channel" type="text" {...channelRegister} />
            <Button type="submit">생성하기</Button>
          </form>
        </Modal.Dialog>
      </Modal>

      <InviteWorkspaceModal workspace={workspace} isOpen={isInviteWSModalOpen} onCloseModal={closeInviteWSModal} />
      <InviteChannelModal workspace={workspace} isOpen={isInviteWSModalOpen} onCloseModal={closeInviteWSModal} />
    </>
  );
};

export default Channel;
