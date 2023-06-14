import { Palette } from '@/style/global';
import styled from '@emotion/styled';

export const Layer = styled.div`
  width: 22%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid ${Palette.NATURAL_N20};
`;

export const RoomListBox = styled.div`
  padding-top: 35px;
  overflow-y: auto;

  ::-webkit-scrollbar {
    width: 0;
  }
`;
