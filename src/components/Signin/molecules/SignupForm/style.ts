import styled from '@emotion/styled';

export const Form = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 5em;
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
