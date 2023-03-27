import axiosInstance from '../apis';
import React from 'react';
import { IChannel, IChannelForm, IInviteForm, SuccessResponse } from 'types';
import { useParams } from 'react-router-dom';

const useChannel = () => {
  const { workspace, channel } = useParams();

  const createChannel = async (data: IChannelForm) => {
    try {
      await axiosInstance.post<IChannel>(`/workspaces/${workspace}/channels`, data);
    } catch (error) {
      console.log(error);
    }
  };

  const inviteChannel = async (data: IInviteForm) => {
    try {
      await axiosInstance.post<SuccessResponse>(`/workspaces/${workspace}/channels/${channel}/members`, data);
    } catch (error) {
      console.log(error);
    }
  };

  return {
    createChannel,
    inviteChannel,
  };
};

export default useChannel;
