import { Palette } from '@/style/global';
import styled from '@emotion/styled';

export const Button = styled.button`
  width: 100%;
  height: 60px;
  background: ${({ isCheck }: { isCheck: boolean }) =>
    isCheck ? Palette.PRIMARY_P30 : Palette.PRIMARY_P40};
  border-radius: 10px;
  border: none;
  color: ${Palette.NATURAL_N30};
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.25);
  cursor: pointer;
`;
