export interface ISignUpForm {
  email: string;
  nickname: string;
  password: string;
  passwordCheck: string;
}

export interface ILoginForm {
  email: string;
  password: string;
}

export interface IWorkspaceForm {
  workspace: string;
  url: string;
}

export interface IChannelForm {
  name: string;
}

export interface IUser {
  id: number;
  nickname: string;
  email: string;
  Workspaces: IWorkspace[];
}

export interface IUserWithOnline extends IUser {
  online: boolean;
}

export interface IChannel {
  id: number;
  name: string;
  private: boolean;
  WorkspaceId: number;
}

export interface IChat {
  // 채널의 채팅
  id: number;
  UserId: number;
  User: IUser; // 보낸 사람
  content: string;
  createdAt: Date;
  ChannelId: number;
  Channel: IChannel;
}

export interface IDM {
  // DM 채팅
  id: number;
  SenderId: number; // 보낸 사람 아이디
  Sender: IUser;
  ReceiverId: number; // 받는 사람 아이디
  Receiver: IUser;
  content: string;
  createdAt: Date;
}

export interface IWorkspace {
  id: number;
  name: string;
  url: string; // 주소 창에 보이는 주소
  OwnerId: number; // 워크스페이스 만든 사람 아이디
}
