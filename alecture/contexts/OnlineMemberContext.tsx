import React, { createContext, Dispatch, SetStateAction, useState } from 'react';

export interface IonlineMembersContext {
  onlineMembers: number[];
  setonlineMembers: Dispatch<SetStateAction<number[]>>;
}

export const OnlineMemeberContext = createContext<IonlineMembersContext>({
  onlineMembers: [],
  setonlineMembers: () => {},
});

export const OnlineMemeberContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [onlineMembers, setonlineMembers] = useState<number[]>([]);

  return (
    <OnlineMemeberContext.Provider
      value={{
        onlineMembers,
        setonlineMembers,
      }}
    >
      {children}
    </OnlineMemeberContext.Provider>
  );
};
