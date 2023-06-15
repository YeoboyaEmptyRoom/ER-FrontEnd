import IsNotNull from '@/lib/isNotNull';
import { SignupInfoType } from '@/types/components/Auth';
import { FieldErrors, useForm } from 'react-hook-form';
import SubmitButton from '../../atoms/AuthButton';
import AuthInput from '../../atoms/AuthInput';
import * as S from '../../common/Form/style';

const SignupForm = () => {
  const { register, handleSubmit, watch } = useForm<SignupInfoType>({
    defaultValues: {
      id: '',
      email: '',
      authNum: undefined,
      pw: '',
      pwCheck: '',
    },
  });

  const onSuccess = (e: SignupInfoType) => {
    console.log(e);
  };

  const onError = (e: FieldErrors<SignupInfoType>) => {
    console.error(e);
  };

  return (
    <S.Form onSubmit={handleSubmit(onSuccess, onError)}>
      <S.InputBox>
        <AuthInput placeholder="아이디" register={register('id')} />
        <AuthInput
          type="email"
          placeholder="이메일"
          register={register('email')}
        />
        <AuthInput
          placeholder="비밀번호"
          register={register('pw')}
          type="password"
          value={watch('pw')}
        />
        <AuthInput
          placeholder="비밀번호 확인"
          register={register('pwCheck')}
          type="password"
          value={watch('pwCheck')}
        />
      </S.InputBox>
      <SubmitButton
        type="submit"
        isCheck={
          IsNotNull(watch('id')) &&
          IsNotNull(watch('email')) &&
          IsNotNull(watch('pw')) &&
          IsNotNull(watch('pwCheck'))
        }
      >
        가입하기
      </SubmitButton>
    </S.Form>
  );
};

export default SignupForm;
