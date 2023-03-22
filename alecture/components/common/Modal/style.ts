import styled from '@emotion/styled';

export const ModalContainer = styled.div`
  position: absolute;
  text-align: center;
  left: 50%;
  top: 50%;
  z-index: 1000;
  background: white;
  transform: translate(-50%, -50%);
`;

export const ModalHeader = styled.div`
  border-bottom: 1px solid lightgrey;
`;

export const ModalDialog = styled.div``;

export const CloseModalButton = styled.button`
  position: absolute;
  right: 10px;
  top: 6px;
  background: transparent;
  border: none;
  font-size: 20px;
  cursor: pointer;
`;
