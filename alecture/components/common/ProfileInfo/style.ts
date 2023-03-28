import styled from '@emotion/styled';

export const ProfileContainer = styled.div<{ focus: boolean | undefined }>`
  display: flex;
  background-color: ${(props) => (props.focus ? 'lightgray' : undefined)};
`;

export const ProfileImage = styled.img`
  width: 28px;
  height: 28px;
`;
