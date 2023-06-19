import { isForm } from '@/atom/components/Auth';
import IsNotNull from '@/lib/isNotNull';
import { SigninInfoType } from '@/types/components/Auth';
import { FieldErrors, useForm } from 'react-hook-form';
import { useSetRecoilState } from 'recoil';
import AuthInput from '../../atoms/AuthInput';
import SubmitButton from '../../atoms/AuthButton';
import * as S from '../../common/Form/style';
import useFetch from '@/hook/useFetch';
import { toast } from 'react-toastify';
import { useRouter } from 'next/navigation';

const SigninForm = () => {
  const setForm = useSetRecoilState(isForm);
  const router = useRouter();

  const { register, handleSubmit, watch } = useForm<SigninInfoType>({
    defaultValues: {
      id: '',
      pw: '',
    },
  });

  const { fetch, error } = useFetch({
    url: '/user/login/',
    method: 'post',
    onSuccess() {
      toast.success('로그인을 성공했습니다');
      router.push('/');
    },
    onFailure() {
      console.log(error);
    },
  });

  const onSubmit = (e: SigninInfoType) => {
    fetch({
      email: watch('id'),
      password: watch('pw'),
    });
  };

  const onError = (e: FieldErrors<SigninInfoType>) => {
    console.error(e);
  };

  return (
    <S.Form onSubmit={handleSubmit(onSubmit, onError)}>
      <S.InputBox>
        <AuthInput placeholder="아이디" register={register('id')} />
        <AuthInput
          placeholder="비밀번호"
          register={register('pw')}
          type="password"
          value={watch('pw')}
        />
      </S.InputBox>
      <S.BtnBox>
        <SubmitButton
          type="submit"
          isCheck={IsNotNull(watch('pw')) && IsNotNull(watch('pw'))}
        >
          로그인
        </SubmitButton>
        <small>
          계정이 없으신가요?{' '}
          <span onClick={() => setForm('signup')}>회원가입</span>
        </small>
      </S.BtnBox>
    </S.Form>
  );
};

export default SigninForm;
