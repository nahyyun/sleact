import axiosInstance from '../apis';
import React from 'react';
import { IWorkspace, IWorkspaceForm } from 'types';

const useWorkspace = () => {
  const createWorkspace = async (data: IWorkspaceForm) => {
    try {
      await axiosInstance.post<IWorkspace>('/workspaces', data);
    } catch (error) {
      console.log(error);
    }
  };

  return {
    createWorkspace,
  };
};

export default useWorkspace;
