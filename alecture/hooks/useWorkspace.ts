import axiosInstance from '../apis';
import React from 'react';
import { IWorkspace, IWorkspaceForm, IInviteWorkspaceForm } from '../types';

const useWorkspace = () => {
  const createWorkspace = async (data: IWorkspaceForm) => {
    try {
      await axiosInstance.post<IWorkspace>('/workspaces', data);
    } catch (error) {
      console.log(error);
    }
  };

  const inviteWorkspace = async (workspace: string, data: IInviteWorkspaceForm) => {
    try {
      await axiosInstance.post<IWorkspace>(
        `/workspaces/${workspace}/members
      `,
        data,
      );
    } catch (error) {
      console.log(error);
    }
  };

  return {
    createWorkspace,
    inviteWorkspace,
  };
};

export default useWorkspace;
