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

const SecondStep = ({ register, watch, submit }: Props) => {
  return (
    <S.Form>
      <S.InputBox>
        <AuthInput placeholder="비밀번호" register={register('pw')} />
        <AuthInput placeholder="비밀번호 확인" register={register('pwCheck')} />
      </S.InputBox>
      <SubmitButton
        type="submit"
        onClick={() => submit()}
        isCheck={IsNotNull(watch('pw')) && IsNotNull(watch('pw'))}
      >
        가입하기
      </SubmitButton>
    </S.Form>
  );
};

export default SecondStep;
