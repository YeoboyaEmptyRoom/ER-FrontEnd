import { HTMLInputTypeAttribute, useState } from 'react';
import { UseFormRegisterReturn } from 'react-hook-form';
import * as S from './style';

interface Props {
  type?: HTMLInputTypeAttribute;
  placeholder?: string;
  register: UseFormRegisterReturn;
}

const AuthInput = ({ type = 'text', placeholder, register }: Props) => {
  const [isHide, setHide] = useState(false);

  return (
    <S.Layer>
      <S.Input
        type={type === 'password' && !!isHide ? 'password' : 'text'}
        placeholder={placeholder}
        {...register}
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
