import { Palette } from '@/style/global';
import styled from '@emotion/styled';

export const Layer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  border-bottom: 1px solid ${Palette.NATURAL_N20};

  > span {
    width: 2px;
    height: 30px;
    background: ${Palette.NATURAL_N20};
  }
`;
