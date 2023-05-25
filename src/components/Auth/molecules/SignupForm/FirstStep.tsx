import IsNotNull from '@/lib/isNotNull';
import { SignupInfoType, SignupStepProps } from '@/types/components/Auth';
import { UseFormRegister, UseFormWatch } from 'react-hook-form';
import AuthInput from '../../atoms/AuthInput';
import SubmitButton from '../../atoms/AuthButton';
import * as S from '../Common/Form/style';

const FirstStep = ({ register, watch, submit }: SignupStepProps) => {
  return (
    <S.Form>
      <S.InputBox>
        <AuthInput placeholder="아이디" register={register('id')} />
        <S.EmailBox>
          <AuthInput
            type="email"
            placeholder="이메일"
            register={register('email')}
          />
          <SubmitButton
            type="button"
            onClick={() => console.log('hi')}
            isCheck={watch('email') !== ''}
          >
            인증하기
          </SubmitButton>
        </S.EmailBox>
        <AuthInput placeholder="인증번호" register={register('authNum')} />
      </S.InputBox>
      <SubmitButton
        type="button"
        onClick={() => {
          if (
            IsNotNull(watch('id')) &&
            IsNotNull(watch('email')) &&
            IsNotNull(watch('authNum'))
          ) {
            submit();
          }
        }}
        isCheck={
          IsNotNull(watch('id')) &&
          IsNotNull(watch('email')) &&
          IsNotNull(watch('authNum'))
        }
      >
        다음단계
      </SubmitButton>
    </S.Form>
  );
};

export default FirstStep;
