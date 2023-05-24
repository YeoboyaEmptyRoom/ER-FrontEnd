import IsNotNull from '@/lib/isNotNull';
import { SigninInfoType } from '@/types/components/Auth';
import { FieldErrors, useForm } from 'react-hook-form';
import AuthInput from '../../atoms/AuthInput';
import SubmitButton from '../../atoms/SubmitButton';
import * as S from '../Common/Form/style';

const SigninForm = () => {
  const { register, handleSubmit, watch } = useForm<SigninInfoType>({
    defaultValues: {
      id: '',
      pw: '',
    },
  });

  const onSubmit = (e: SigninInfoType) => {
    console.log(e);
  };

  const onError = (e: FieldErrors<SigninInfoType>) => {
    console.error(e);
  };

  return (
    <S.Form onSubmit={handleSubmit(onSubmit, onError)}>
      <S.InputBox>
        <AuthInput placeholder="아이디" register={register('id')} />
        <AuthInput placeholder="비밀번호" register={register('pw')} />
      </S.InputBox>
      <SubmitButton
        type="submit"
        isCheck={IsNotNull(watch('pw')) && IsNotNull(watch('pw'))}
      >
        로그인
      </SubmitButton>
    </S.Form>
  );
};

export default SigninForm;
