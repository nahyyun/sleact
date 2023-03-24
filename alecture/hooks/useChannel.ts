import axiosInstance from '../apis';
import React from 'react';
import { IChannel, IChannelForm } from 'types';

const useChannel = () => {
  const createChannel = async (workspace: string, data: IChannelForm) => {
    try {
      await axiosInstance.post<IChannel>(`/workspaces/:${workspace}/channels`, data);
    } catch (error) {
      console.log(error);
    }
  };

  return {
    createChannel,
  };
};

export default useChannel;
