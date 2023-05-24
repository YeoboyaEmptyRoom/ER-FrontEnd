import AuthForm from '../../molecules/SignupForm/FirstStep';
import AuthLogo from '../../molecules/AuthLogo';
import { Layer } from './style';

const Signup = () => {
  return (
    <Layer>
      <AuthLogo />
      <AuthForm />
    </Layer>
  );
};

export default Signup;
