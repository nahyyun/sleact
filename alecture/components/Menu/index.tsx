import React from 'react';
import * as S from './style';

type MenuProps = {
  children: React.ReactNode;
  isShow: boolean;
  onCloseMenu: () => void;
};

const Menu = ({ children, isShow, onCloseMenu }: MenuProps) => {
  return (
    <S.CreateMenu>
      <div onClick={(e) => e.stopPropagation()}>
        <S.CloseModalButton onClick={onCloseMenu}>X</S.CloseModalButton>
        {children}
      </div>
    </S.CreateMenu>
  );
};

export default Menu;
