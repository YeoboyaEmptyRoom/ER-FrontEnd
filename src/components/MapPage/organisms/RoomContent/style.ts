import { Palette } from '@/style/global';
import styled from '@emotion/styled';

export const Layer = styled.div`
  width: 25%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid ${Palette.NATURAL_N20};
`;

export const RoomListBox = styled.div`
  margin-top: ${({ roomInfo }: { roomInfo: boolean }) =>
    roomInfo ? '35px' : 0};
  overflow-y: auto;
  display: flex;
  justify-content: ${({ roomInfo }: { roomInfo: boolean }) =>
    roomInfo ? 'baseline' : 'center'};
  align-items: center;
  gap: 2em;
  height: 100%;
  flex-direction: column;

  ::-webkit-scrollbar {
    width: 0;
  }
`;
