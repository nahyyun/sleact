import React, { useEffect, useContext } from 'react';
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
import InviteWorkspaceModal from '@components/ChannelWrapper/InviteWorkspaceModal';
import ChannelList from '@components/ChannelWrapper/ChannelList';
import useSocket from '@hooks/useSocket';
import { OnlineMemeberContext } from '@contexts/OnlineMemberContext';

const ChannelWrrpaer = () => {
  const { isOpen: isMenuOpen, openMenu: openChannelMenu, closeMenu: closeChannelMenu } = useMenu();
  const {
    isOpen: isCreateChannelModalOpen,
    openModal: openCreateChannelModal,
    closeModal: closeCreateChannelModal,
  } = useModal();
  const { isOpen: isInviteWSModalOpen, openModal: openInviteWSModal, closeModal: closeInviteWSModal } = useModal();

  const {
    logout,
    user: { userInfo },
  } = useAuth();
  const { createChannel } = useChannel();

  const { workspace } = useParams<{ workspace: string }>() as { workspace: string };

  const { fetch, responseData: channels } = useFetch<IChannel[]>(`/workspaces/${workspace}/channels`);

  const { loginSocket, getOnlineListSocket, disconnect } = useSocket();

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

  const onSubmit = handleSubmit(async (data) => {
    await createChannel(data);
    fetch();
    closeCreateChannelModal();
  });

  const { onlineMembers, setonlineMembers } = useContext(OnlineMemeberContext);

  useEffect(() => {
    if (!channels || !userInfo) return;

    loginSocket(
      userInfo.id,
      channels?.map((channel) => channel.id),
    );

    getOnlineListSocket(setonlineMembers);
  }, [channels]);

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
          <ChannelList workspace={workspace} channels={channels} />
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
    </>
  );
};

export default ChannelWrrpaer;
