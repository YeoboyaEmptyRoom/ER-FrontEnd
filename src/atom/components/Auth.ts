import { atom } from 'recoil';

export const isForm = atom<'signin' | 'signup'>({
  key: 'isForm',
  default: 'signin',
});

export const rentType = atom<'' | '전세' | '월세'>({
  key: 'rentType',
  default: '',
});
