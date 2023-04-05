import React, { useContext } from 'react';
import useFetch from '@hooks/useFetch';
import { IUser } from '../../types';
import { NavLink } from 'react-router-dom';
import onlineIcon from '@assets/online.png';
import offlineIcon from '@assets/offline.png';
import * as S from './style';
import { OnlineMemeberContext } from '@contexts/OnlineMemberContext';

const DMList = ({ userInfo, workspace }: { userInfo: IUser | null; workspace: string }) => {
  const { responseData: workspaceMembers } = useFetch<IUser[]>(`/workspaces/${workspace}/members`);

  const { onlineMembers } = useContext(OnlineMemeberContext);
  if (!userInfo) return null;

  return (
    <S.DMListWrapper>
      <h2>Direct Message</h2>
      {workspaceMembers?.map((member) => (
        <NavLink to={`/workspace/${workspace}/dm/${member.id}`} key={member.id}>
          {onlineMembers.find((onlineMember) => onlineMember === member.id) ? (
            <S.StatusIcon src={onlineIcon} />
          ) : (
            <S.StatusIcon src={offlineIcon} />
          )}
          <span>
            {member.nickname}
            {member.id === userInfo.id ? '(나)' : ''}
          </span>
        </NavLink>
      ))}
    </S.DMListWrapper>
  );
};

export default DMList;
