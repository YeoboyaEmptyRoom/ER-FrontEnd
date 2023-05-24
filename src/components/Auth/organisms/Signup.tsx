import SignupForm from '../molecules/SignupForm';
import AuthLogo from '../molecules/AuthLogo';
import { Layer } from './style';

const Signup = () => {
  return (
    <Layer>
      <AuthLogo />
      <SignupForm />
    </Layer>
  );
};

export default Signup;
