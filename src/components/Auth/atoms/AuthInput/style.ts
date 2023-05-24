import { Palette } from '@/style/global';
import styled from '@emotion/styled';
import CloseEye from '../../../../../public/static/svg/CloseEye.svg';
import OpenEye from '../../../../../public/static/svg/OpenEye.svg';

export const Layer = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  align-items: center;
`;

export const Input = styled.input`
  width: 100%;
  display: flex;
  align-items: center;
  background: ${Palette.NATURAL_N30};
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.15);
  border-radius: 10px;
  height: 60px;
  width: 100%;
  padding: 0 1.25em;
  border: none;
  outline: none;

  &:focus {
    border: 1px solid ${Palette.PRIMARY_P10};
  }
`;

export const OpenEyeBtn = styled(OpenEye)`
  position: absolute;
  right: 1.25em;
  transform: translateY(-50%);
`;

export const CloseEyeBtn = styled(CloseEye)`
  position: absolute;
  right: 1.25em;
  transform: translateY(-50%);
`;
