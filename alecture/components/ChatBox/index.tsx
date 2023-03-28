import React, { useState } from 'react';
import { Mention, OnChangeHandlerFunc, SuggestionDataItem } from 'react-mentions';
import ProfileInfo from '@components/common/ProfileInfo';
import Button from '@components/common/Button';
import { IUser } from '../../types';
import * as S from './style';

const ChatBox = ({ memberList }: { memberList: IUser[] }) => {
  const [chatValue, setChatValue] = useState('');

  const onChangeChatValue: OnChangeHandlerFunc = (e) => {
    setChatValue(e.target.value);
  };

  const mentionMemberList = memberList?.map((member) => ({ id: member.id, display: member.nickname })) || [];

  const renderSuggestion = (
    suggestion: SuggestionDataItem,
    search: string,
    highlightedDisplay: React.ReactNode,
    index: number,
    focused: boolean,
  ) => {
    return (
      <ProfileInfo userInfo={memberList[index]} focus={focused}>
        <span>{highlightedDisplay}</span>
      </ProfileInfo>
    );
  };

  const onSubmit = () => {};

  return (
    <S.ChatBoxContainer>
      <form onSubmit={onSubmit}>
        <S.MentionTextareaWrapper value={chatValue} onChange={onChangeChatValue}>
          <Mention trigger="@" data={mentionMemberList} renderSuggestion={renderSuggestion} />
        </S.MentionTextareaWrapper>
        <S.Toolbox>
          <Button>전송</Button>
        </S.Toolbox>
      </form>
    </S.ChatBoxContainer>
  );
};

export default ChatBox;
