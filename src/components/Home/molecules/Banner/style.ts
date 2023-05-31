import { Palette } from '@/style/global';
import styled from '@emotion/styled';

export const Layer = styled.div`
  width: 100%;
  height: calc(100vw / 32 * 5);
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 1.5em;

  > img {
    height: 100%;
    z-index: -1;
  }

  > h3 {
    color: ${Palette.NATURAL_N30};
  }
`;
