import { atom } from 'recoil';

export const modalVisibleAtom = atom<boolean>({
  key: 'modalVisible', // unique ID (with respect to other atoms/selectors)
  default: false, // default value (aka initial value)
});
