import { Palette } from '@/style/global';
import styled from '@emotion/styled';

export const Button = styled.button`
  width: 100%;
  height: 60px;
  color: ${({ active }: { active: boolean }) =>
    active ? Palette.PRIMARY_P10 : Palette.NATURAL_N10};
  transition: all 0.2s;
  background: ${Palette.NATURAL_N30};
  border: none;
  cursor: pointer;

  :hover {
    color: ${Palette.PRIMARY_P10};
  }
`;
