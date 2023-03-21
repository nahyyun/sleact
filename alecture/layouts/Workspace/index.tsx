import Button from '@components/common/Button';
import React from 'react';
import useAuth from '../../hooks/useAuth';
import * as S from './style';
import { Outlet } from 'react-router-dom';
import Header from '@layouts/Header';
import Workspaces from '@components/Workspaces';

const Workspace = () => {
  const { logout } = useAuth();

  return (
    <div>
      <Header />
      <S.WorkspaceWrapper>
        <Workspaces />
        <S.Channels>
          <S.WorkspaceName>Sleact</S.WorkspaceName>
          <S.MenuScroll>menu scroll</S.MenuScroll>
        </S.Channels>
        <S.Chats>chats</S.Chats>
      </S.WorkspaceWrapper>
      {/* <Modal show={showCreateWorkspaceModal} onCloseModal={setShowCreateWorkspaceModal}></Modal> */}
      <Button onClick={logout}>로그아웃</Button>
      <Outlet />
    </div>
  );
};

export default Workspace;
