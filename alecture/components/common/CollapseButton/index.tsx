import React from 'react';

interface CollapseButtonProps {
  collapse: boolean;
  onToggle: () => void;
  children: React.ReactNode;
}

const CollapseButton = ({ collapse, onToggle, children }: CollapseButtonProps) => {
  return <div onClick={onToggle}>{children}</div>;
};

export default CollapseButton;
