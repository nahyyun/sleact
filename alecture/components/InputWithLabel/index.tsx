import React, { forwardRef } from 'react';
import * as S from './style';

type InputWithLabelProps = {
  labelId: string;
  title: string;
  type: string;
  id: string;
};

const InputWithLabel = forwardRef<HTMLInputElement, InputWithLabelProps>(
  ({ labelId, title, ...props }: InputWithLabelProps, ref) => {
    return (
      <S.Label id={labelId}>
        <span>{title}</span>
        <div>
          <S.Input {...props} ref={ref} />
        </div>
      </S.Label>
    );
  },
);

export default InputWithLabel;
