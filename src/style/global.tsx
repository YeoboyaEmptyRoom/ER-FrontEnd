import { Global, css } from '@emotion/react';
import 'react-toastify/dist/ReactToastify.css';
import 'swiper/css';

const color = {
  '--PRIMARY_P10': '#FF8833',
  '--PRIMARY_P20': '#FFA769',
  '--PRIMARY_P30': '#FFB682',
  '--PRIMARY_P40': '#FFDCC2',

  '--NATURAL_N10': '#000000',
  '--NATURAL_N20': '#D9D9D9',
  '--NATURAL_N30': '#FFFFFF',

  '--SYSTEM_ERROR': '#D84D4D',
  '--SYSTEM_POSITIVE': '#2E8546',

  '--SUB_BLUE': '#CCDEFF',
  '--SUB_RED': '#FFCCCC',
};

const cssColor = (color: string) => `var(--${color})`;

export const Palette = {
  PRIMARY_P10: cssColor('PRIMARY_P10'),
  PRIMARY_P20: cssColor('PRIMARY_P20'),
  PRIMARY_P30: cssColor('PRIMARY_P30'),
  PRIMARY_P40: cssColor('PRIMARY_P40'),
  NATURAL_N10: cssColor('NATURAL_N10'),
  NATURAL_N20: cssColor('NATURAL_N20'),
  NATURAL_N30: cssColor('NATURAL_N30'),

  SYSTEM_ERROR: cssColor('SYSTEM_ERROR'),
  SYSTEM_POSITIVE: cssColor('SYSTEM_POSITIVE'),

  SUB_BLUE: cssColor('SUB_BLUE'),
  SUB_RED: cssColor('SUB_RED'),
};

const style = css`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    text-decoration: none;
  }

  a {
    color: inherit;
  }

  body {
    ${color}
  }
`;

const GlobalStyle = () => {
  return <Global styles={style}></Global>;
};

export default GlobalStyle;
