import React from 'react';
import { createPortal } from 'react-dom';

interface PortalProps {
  children: React.ReactNode;
  targetElement: Element | DocumentFragment;
}

const Portal = ({ children, targetElement }: PortalProps) => {
  return createPortal(children, targetElement);
};

export default Portal;
