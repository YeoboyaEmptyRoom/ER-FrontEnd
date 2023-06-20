import { Palette } from '@/style/global';
import styled from '@emotion/styled';

export const Layer = styled.div`
  width: 350px;
  height: 450px;
  border: 1px solid ${Palette.NATURAL_N20};
  border-radius: 1em;
  padding: 30px 45px;
`;

export const InfoBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1em;
`;

export const H2 = styled.h2`
  padding: 45px 0 25px 0;
`;

export const Button = styled.button`
  width: 250px;
  height: 36px;
  border: none;
  background: ${Palette.PRIMARY_P30};
  border-radius: 1em;
  color: ${Palette.NATURAL_N30};
  cursor: pointer;

  :hover {
    background: ${Palette.PRIMARY_P20};
  }
`;
