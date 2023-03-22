import styled from '@emotion/styled';

interface DimmerStyleProps {
  backgroundOpacity: string;
}

export const Dimmer = styled.div<DimmerStyleProps>`
  position: fixed;
  left: 0;
  bottom: 0;
  top: 0;
  right: 0;
  background: rgba(0, 0, 0, ${(props) => props.backgroundOpacity});
`;
