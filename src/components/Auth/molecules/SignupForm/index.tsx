import SignupInfoType from '@/types/components/Auth';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import FirstStep from './FirstStep';
import SecondStep from './SecondStep';
import { Layer } from './style';

const AuthForm = () => {
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
    <Layer step={step} onSubmit={handleSubmit(onSuccess)}>
      <FirstStep register={register} watch={watch} submit={() => setStep(2)} />
      <SecondStep register={register} watch={watch} submit={() => {}} />
    </Layer>
  );
};

export default AuthForm;
