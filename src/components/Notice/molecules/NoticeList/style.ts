import { Palette } from '@/style/global';
import styled from '@emotion/styled';

export const Layer = styled.div`
  width: 100%;
`;

export const ListTitle = styled.div`
  width: 100%;
  display: flex;
  border-top: 1px solid ${Palette.NATURAL_N10};
  border-bottom: 1px solid ${Palette.NATURAL_N10};
  padding: 1.5em 0;

  > h3 {
    text-align: center;
  }
  > h3:nth-of-type(1) {
    width: 88%;
  }
  > h3:nth-of-type(2) {
    width: 12%;
  }
`;

export const ListContent = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1px;
  background: ${Palette.NATURAL_N20};
`;
