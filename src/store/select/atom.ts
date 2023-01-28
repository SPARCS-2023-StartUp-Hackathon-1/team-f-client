import { atomFamily } from 'recoil';

const selectAtomFamily = atomFamily({
  key: 'selectedCategoryId',
  default: 0,
});

export default selectAtomFamily;
