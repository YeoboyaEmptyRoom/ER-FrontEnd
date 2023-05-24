import SigninForm from '../molecules/SigninForm';
import AuthLogo from '../molecules/AuthLogo';
import { Layer } from './style';

const Signin = () => {
  return (
    <Layer>
      <AuthLogo />
      <SigninForm />
    </Layer>
  );
};

export default Signin;
