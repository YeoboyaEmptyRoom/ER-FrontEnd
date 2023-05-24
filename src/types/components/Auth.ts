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
