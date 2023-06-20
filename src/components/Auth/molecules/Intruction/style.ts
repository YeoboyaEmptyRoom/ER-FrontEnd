import { Palette } from '@/style/global';
import styled from '@emotion/styled';

export const Layer = styled.div`
  width: 50%;
  height: 100%;
  background: ${Palette.PRIMARY_P20};
  position: absolute;
  top: 0;
  left: ${({ form }: { form: 'signup' | 'signin' }) =>
    form === 'signin' ? 0 : 50}%;
  box-shadow: inset 0px 0px 30px rgba(0, 0, 0, 0.25);
  color: ${Palette.NATURAL_N30};
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 1.5em;
  transition: 1s;
`;
