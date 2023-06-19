import { Palette } from '@/style/global';
import styled from '@emotion/styled';
import Link from 'next/link';

export const Layer = styled.header`
  width: 100%;
  height: 7.5em;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 3.25em;
  border-bottom: 1px solid ${Palette.NATURAL_N20};
  gap: 5%;
`;

export const LogoBox = styled(Link)`
  width: 15%;
  display: flex;
  gap: 2em;
  align-items: center;
  color: ${Palette.PRIMARY_P10};
  cursor: pointer;
`;

export const NavList = styled.div`
  width: 70%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const AuthBtnBox = styled(Link)`
  width: 15%;
  height: 4em;
  color: ${Palette.NATURAL_N30};
  background: ${Palette.PRIMARY_P30};
  border: none;
  border-radius: 0.5em;
  transition: 0.25s;
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.25);
  cursor: pointer;

  &:hover {
    background: ${Palette.PRIMARY_P20};
  }
`;
