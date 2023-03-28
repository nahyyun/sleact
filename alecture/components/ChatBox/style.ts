import styled from '@emotion/styled';
import { MentionsInput } from 'react-mentions';

export const ChatBoxContainer = styled.div`
  border: 1px solid lightgray;
  border-radius: 15px;
  margin: 10px;
`;

export const MentionTextareaWrapper = styled(MentionsInput)`
  & textarea {
    height: 150px;
    padding: 9px 10px;
    outline: none;
    border-radius: 4px;
    line-height: 22px;
    border: none;
  }
`;

export const Toolbox = styled.div``;
