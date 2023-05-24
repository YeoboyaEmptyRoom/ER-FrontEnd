import IsNotNull from '@/lib/isNotNull';
import { SignupInfoType } from '@/types/components/Auth';
import { UseFormRegister, UseFormWatch } from 'react-hook-form';
import AuthInput from '../../atoms/AuthInput';
import SubmitButton from '../../atoms/SubmitButton';
import * as S from '../Common/Form/style';

interface Props {
  register: UseFormRegister<SignupInfoType>;
  watch: UseFormWatch<SignupInfoType>;
  submit: () => void;
}

const FirstStep = ({ register, watch, submit }: Props) => {
  return (
    <S.Form>
      <S.InputBox>
        <AuthInput
          placeholder="아이디"
          register={register('id', {
            pattern: {
              value: /a/,
              message: '아이디는 6~12자 이내로 작성해주세요',
            },
          })}
        />
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
