import selectAtomFamily from '@/store/select';
import { useRouter } from 'next/router';
import { useRecoilValue } from 'recoil';

interface UseCategoryButtonProps {
  type: 'main' | 'mid';
}

const useCategoryButton = ({ type }: UseCategoryButtonProps) => {
  const selectedId = useRecoilValue(selectAtomFamily(type));
  const router = useRouter();

  const isDisabled = selectedId === 0 ? true : false;

  const handleClick = () => {
    router.push(`${router.asPath}/${selectedId}`);
  };

  return { handleClick, isDisabled };
};

export default useCategoryButton;
