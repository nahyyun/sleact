import React from 'react';
import * as S from './style';

interface DimmerProps {
  onClick: () => void;
  backgroundOpacity: string;
}

const Dimmer = (props: DimmerProps) => {
  return <S.Dimmer {...props} />;
};

export default Dimmer;
