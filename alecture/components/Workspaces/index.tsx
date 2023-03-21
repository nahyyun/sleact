import useAuth from '@hooks/useAuth';
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import * as S from './style';

const Workspaces = () => {
  const [showCreateWorkspaceModal, setsShowCreateWorkspaceModal] = useState(false);
  const { user } = useAuth();

  const onCreateWorkspace = () => {
    setsShowCreateWorkspaceModal(true);
  };

  return (
    <S.Workspaces>
      {user?.Workspaces?.map((ws) => (
        <NavLink key={ws.id} to={`/workspace/${123}/channel`}>
          <S.WorkspaceButton>{ws.name.slice(0, 1).toUpperCase()}</S.WorkspaceButton>
        </NavLink>
      ))}
      <S.AddButton onClick={onCreateWorkspace}></S.AddButton>
    </S.Workspaces>
  );
};

export default Workspaces;
