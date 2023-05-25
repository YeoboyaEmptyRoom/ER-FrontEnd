import { atom } from 'recoil';

export const isForm = atom<'signin' | 'signup'>({
  key: 'isForm',
  default: 'signin',
});
