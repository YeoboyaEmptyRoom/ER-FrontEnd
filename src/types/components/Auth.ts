import { UseFormRegister, UseFormWatch } from 'react-hook-form';

export interface SignupInfoType {
  id: string;
  email: string;
  authNum: number;
  pw: string;
  pwCheck: string;
}

export type SigninInfoType = Omit<
  SignupInfoType,
  'email' | 'authNum' | 'pwCheck'
>;

export interface SignupStepProps {
  register: UseFormRegister<SignupInfoType>;
  watch: UseFormWatch<SignupInfoType>;
  submit: () => void;
}
