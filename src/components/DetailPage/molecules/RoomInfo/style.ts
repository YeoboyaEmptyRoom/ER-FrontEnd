import { Palette } from '@/style/global';
import styled from '@emotion/styled';

export const Layer = styled.div`
  width: 60%;
  h2 {
    margin-bottom: 0.5em;
  }
`;

export const Line = styled.div`
  width: 100%;
  height: 1px;
  background: ${Palette.NATURAL_N20};
  margin-bottom: 1.5em;
`;

export const Box = styled.div`
  display: flex;
  gap: 2em;
  align-items: center;
  margin-bottom: 2em;
`;
