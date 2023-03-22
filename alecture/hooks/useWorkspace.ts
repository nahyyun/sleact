import axiosInstance from '../apis';
import React from 'react';
import { IWorkspace, IWorkspaceForm } from 'types';

const useWorkspace = () => {
  const createWorkspace = (data: IWorkspaceForm) => {
    try {
      axiosInstance.post<IWorkspace>('/workspaces', data);
    } catch (error) {
      console.log(error);
    }
  };

  return {
    createWorkspace,
  };
};

export default useWorkspace;
