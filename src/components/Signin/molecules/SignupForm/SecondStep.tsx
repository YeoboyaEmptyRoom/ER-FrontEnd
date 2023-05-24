import AuthInput from '../../atoms/AuthInput';
import SubmitButton from '../../atoms/SubmitButton';
import * as S from './style';

const SecondStep = () => {
  return (
    <S.Form>
      <S.InputBox>
        <AuthInput placeholder="비밀번호" />
        <AuthInput placeholder="비밀번호 확인" />
      </S.InputBox>
      <SubmitButton onClick={() => console.log('hi')} isCheck={false}>
        가입하기
      </SubmitButton>
    </S.Form>
  );
};

export default SecondStep;
