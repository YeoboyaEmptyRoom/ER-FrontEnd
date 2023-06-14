import { Palette } from '@/style/global';
import styled from '@emotion/styled';

export const Layer = styled.div`
  width: 100%;
  height: 90px;
  background: ${Palette.NATURAL_N30};
  display: flex;
  justify-content: space-between;
  padding: 0 2%;
  align-items: center;

  h3:nth-of-type(2) {
    color: ${Palette.NATURAL_N20};
  }
`;
