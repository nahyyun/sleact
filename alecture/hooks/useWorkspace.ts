import axiosInstance from '../apis';
import React from 'react';
import { IWorkspace, IWorkspaceForm, IInviteForm } from '../types';

const useWorkspace = () => {
  const createWorkspace = async (data: IWorkspaceForm) => {
    try {
      await axiosInstance.post<IWorkspace>('/workspaces', data);
    } catch (error) {
      console.log(error);
    }
  };

  const inviteWorkspace = async (workspace: string, data: IInviteForm) => {
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
