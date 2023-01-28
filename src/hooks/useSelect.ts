import selectAtomFamily from '@/store/select';
import { useRef } from 'react';
import { useRecoilState } from 'recoil';

interface UseSelectProps {
  type: 'main' | 'mid';
}

const useSelect = ({ type }: UseSelectProps) => {
  const selectRef = useRef<HTMLLIElement>(null);
  const [selectedId, setSelectedId] = useRecoilState(selectAtomFamily(type));

  const handleSelect = () => {
    if (selectRef.current) setSelectedId(+selectRef.current.id);
  };

  return { selectRef, handleSelect, selectedId };
};

export default useSelect;
