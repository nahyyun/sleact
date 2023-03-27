import React from 'react';
import useFetch from '@hooks/useFetch';
import { IUser } from '../../types';
import { NavLink } from 'react-router-dom';
import onlineIcon from '@assets/online.png';
import offlineIcon from '@assets/offline.png';
import * as S from './style';

const DMList = ({ workspace }: { workspace: string }) => {
  const { responseData: workspaceMembers } = useFetch<IUser[]>(`/workspaces/${workspace}/members`);

  return (
    <S.DMListWrapper>
      {workspaceMembers?.map((member) => (
        <NavLink to={`workspace/${workspace}/dm/${member}`} key={member.id}>
          <S.StatusIcon src={offlineIcon} />
          {member.nickname}
        </NavLink>
      ))}
    </S.DMListWrapper>
  );
};

export default DMList;
