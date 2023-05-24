import AuthInput from '../../atoms/AuthInput';
import SubmitButton from '../../atoms/SubmitButton';
import * as S from './style';

const FirstStep = () => {
  return (
    <S.Form>
      <S.InputBox>
        <AuthInput placeholder="아이디" />
        <S.EmailBox>
          <AuthInput type="email" placeholder="이메일" />
          <SubmitButton onClick={() => console.log('hi')} isCheck={false}>
            인증하기
          </SubmitButton>
        </S.EmailBox>
        <AuthInput placeholder="인증번호" />
      </S.InputBox>
      <SubmitButton onClick={() => console.log('hi')} isCheck={false}>
        다음단계
      </SubmitButton>
      /
    </S.Form>
  );
};

export default FirstStep;
