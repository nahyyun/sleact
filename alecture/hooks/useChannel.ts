import axiosInstance from '../apis';
import React from 'react';
import { IChannel, IChannelForm } from 'types';

const useChannel = () => {
  const createChannel = async (workspace: string, data: IChannelForm) => {
    try {
      await axiosInstance.post<IChannel>(`/workspaces/${workspace}/channels`, data);
    } catch (error) {
      console.log(error);
    }
  };

  const inviteChannel = async (workspace: string, channel: string, data: IChannelForm) => {
    try {
      await axiosInstance.post<'ok'>(`//workspaces/${workspace}/channels/${channel}/members`, data);
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
