import { HTMLInputTypeAttribute, useState } from 'react';
import * as S from './style';

interface Props {
  type?: HTMLInputTypeAttribute;
  placeholder?: string;
}

const AuthInput = ({ type = 'text', placeholder }: Props) => {
  const [isHide, setHide] = useState(false);
  return (
    <S.Layer>
      <S.Input
        type={type === 'password' && !!isHide ? 'password' : 'text'}
        placeholder={placeholder}
      />
      {type === 'password' && (
        <div onClick={() => setHide(!isHide)}>
          {type === 'password' && !!isHide ? (
            <S.OpenEyeBtn />
          ) : (
            <S.CloseEyeBtn />
          )}
        </div>
      )}
    </S.Layer>
  );
};

export default AuthInput;
