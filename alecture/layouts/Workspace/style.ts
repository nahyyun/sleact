import styled from '@emotion/styled';

export const WorkspaceContainer = styled.div`
  display: flex;
  width: 100%;
`;

export const WorkspaceSidebarWrapper = styled.div`
  display: flex;
`;

export const ChannelAndDMWrapper = styled.section`
  width: 260px;
  background: #3f0e40;
  color: rgb(188, 171, 188);
  vertical-align: top;
`;

export const WorkspaceModal = styled.div`
  padding: 10px 0 0;

  & h2 {
    padding-left: 20px;
  }

  & > button {
    width: 100%;
    height: 28px;
    padding: 4px;
    border: none;
    background: transparent;
    border-top: 1px solid rgb(28, 29, 28);
    cursor: pointer;

    &:last-of-type {
      border-bottom: 1px solid rgb(28, 29, 28);
    }
  }
`;

export const Chats = styled.div`
  flex: 1;
`;

export const ContentsWrapper = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
`;
