import Dimmer from '@components/common/Dimmer';
import React from 'react';
import * as S from './style';

interface MenuProps {
  children: React.ReactNode;
  isOpen: boolean;
  onCloseMenu: () => void;
}

const MenuWrapper = ({ children, isOpen, onCloseMenu }: MenuProps) => {
  if (!isOpen) return null;

  return (
    <>
      <Dimmer onClick={onCloseMenu} backgroundOpacity="none" />
      <S.Menu>{children}</S.Menu>
    </>
  );
};

const Items = ({ children }: { children: React.ReactNode }) => {
  return <ul>{children}</ul>;
};

const Item = ({ children }: { children: React.ReactNode }) => {
  return <li>{children}</li>;
};

const Menu = Object.assign(MenuWrapper, {
  Items,
  Item,
});

export default Menu;
