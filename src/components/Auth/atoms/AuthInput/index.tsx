import IsNotNull from '@/lib/isNotNull';
import { HTMLInputTypeAttribute, useState } from 'react';
import { UseFormRegisterReturn } from 'react-hook-form';
import * as S from './style';

interface Props {
  type?: HTMLInputTypeAttribute;
  placeholder?: string;
  register: UseFormRegisterReturn;
  value?: string;
}

const AuthInput = ({ type = 'text', placeholder, register, value }: Props) => {
  const [isHide, setHide] = useState(true);

  return (
    <S.Layer>
      <S.Input
        type={type === 'password' && !!isHide ? 'password' : 'text'}
        placeholder={placeholder}
        {...register}
      />
      {type === 'password' && IsNotNull(value) && (
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
