import useFetch from '@/hook/useFetch';
import IsNotNull from '@/lib/isNotNull';
import { SignupInfoType } from '@/types/components/Auth';
import { FieldErrors, useForm } from 'react-hook-form';
import SubmitButton from '../../atoms/AuthButton';
import AuthInput from '../../atoms/AuthInput';
import * as S from '../../common/Form/style';
import { useSetRecoilState } from 'recoil';
import { isForm } from '@/atom/components/Auth';
import { toast } from 'react-toastify';

const SignupForm = () => {
  const setForm = useSetRecoilState(isForm);

  const { register, handleSubmit, watch } = useForm<SignupInfoType>({
    defaultValues: {
      id: '',
      email: '',
      authNum: undefined,
      pw: '',
      pwCheck: '',
    },
  });
  const { fetch, error } = useFetch({
    url: '/user/signup/',
    method: 'post',
    onSuccess() {
      toast.success('회원가입을 성공했습니다');
      setForm('signin');
    },
    onFailure() {
      console.log(error);
    },
  });

  const onSubmit = (e: SignupInfoType) => {
    console.log(e);
    fetch({
      email: watch('email'),
      username: watch('id'),
      password: watch('pw'),
      password_confirm: watch('pwCheck'),
    });
  };

  const onError = (e: FieldErrors<SignupInfoType>) => {
    console.error(e);
  };

  return (
    <S.Form onSubmit={handleSubmit(onSubmit, onError)}>
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
