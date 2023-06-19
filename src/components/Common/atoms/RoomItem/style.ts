import styled from '@emotion/styled';
import Image from 'next/image';
import Link from 'next/link';

export const Layer = styled(Link)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 320px;
  gap: 1em;
  cursor: pointer;
`;

export const RoomImg = styled(Image)`
  width: 150px;
  height: 150px;
  object-fit: contain;
  border-radius: 0.5em;
`;

export const RoomInfoBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 0.5em;
`;
