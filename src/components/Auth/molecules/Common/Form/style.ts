import styled from '@emotion/styled';

export const Layer = styled.form`
  width: 250%;
  display: flex;
  margin-left: 150%;
  justify-content: space-between;
  gap: 20%;

  > div {
    transform: translateX(
      ${({ step }: { step: number }) => (step - 1) * -150}%
    );
  }
`;

export const Form = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 5em;
  transition: 1s;
  justify-content: end;
`;

export const InputBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 2.5em;
`;

export const EmailBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  gap: 1em;

  > button {
    width: 30%;
  }
  > input {
    width: 70%;
  }
`;
