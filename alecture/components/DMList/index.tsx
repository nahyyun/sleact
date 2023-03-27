import React from 'react';
import useFetch from '@hooks/useFetch';
import { IUser } from '../../types';
import { NavLink } from 'react-router-dom';
import onlineIcon from '@assets/online.png';
import offlineIcon from '@assets/offline.png';
import * as S from './style';

const DMList = ({ userInfo, workspace }: { userInfo: IUser | null; workspace: string }) => {
  const { responseData: workspaceMembers } = useFetch<IUser[]>(`/workspaces/${workspace}/members`);

  if (!userInfo) return null;

  return (
    <S.DMListWrapper>
      {workspaceMembers?.map((member) => (
        <NavLink to={`workspace/${workspace}/dm/${member.id}`} key={member.id}>
          <S.StatusIcon src={offlineIcon} />
          <span>
            {userInfo.nickname}
            {member.id === userInfo.id ? '(나)' : ''}
          </span>
        </NavLink>
      ))}
    </S.DMListWrapper>
  );
};

export default DMList;
