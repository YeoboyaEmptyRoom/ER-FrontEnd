'use client';

import Signin from '@/components/Auth/organisms/Signin';
import Signup from '@/components/Auth/organisms/Signup';
import { Layer } from '@/components/Auth/templates/style';

const Auth = () => {
  return (
    <Layer>
      <Signup />
      <Signin />
    </Layer>
  );
};

export default Auth;
