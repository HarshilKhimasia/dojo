import { atom } from 'recoil';

export const visibleStateAtom = atom<boolean>({
  key: 'visibleState', // unique ID (with respect to other atoms/selectors)
  default: true, // default value (aka initial value)
});
