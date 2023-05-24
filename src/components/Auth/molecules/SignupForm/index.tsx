import { SignupInfoType } from '@/types/components/Auth';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import * as S from '../Common/Form/style';
import FirstStep from './FirstStep';
import SecondStep from './SecondStep';

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
  const [step, setStep] = useState<number>(1);

  const onSuccess = (e: any) => {
    console.log(e);
  };
  return (
    <S.Layer step={step} onSubmit={handleSubmit(onSuccess)}>
      <FirstStep register={register} watch={watch} submit={() => setStep(2)} />
      <SecondStep register={register} watch={watch} submit={() => {}} />
    </S.Layer>
  );
};

export default SignupForm;
