import { atom } from 'recoil';

export const headerVisibleAtom = atom<boolean>({
  key: 'headerVisible', // unique ID (with respect to other atoms/selectors)
  default: true, // default value (aka initial value)
});
