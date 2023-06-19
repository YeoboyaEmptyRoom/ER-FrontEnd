import { Palette } from '@/style/global';
import styled from '@emotion/styled';
import Link from 'next/link';

export const Layer = styled(Link)`
  text-align: center;
  cursor: pointer;
  transition: 0.2s;

  &:hover {
    color: ${Palette.PRIMARY_P10};
  }
`;
