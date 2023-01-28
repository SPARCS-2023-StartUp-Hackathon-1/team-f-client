import { getMainCategories } from '@/apis';
import { Button } from '@/components/common/Button';
import { GNB } from '@/components/common/GNB';
import Select from '@/components/common/Select';
import { useMainCategoryQuery } from '@/hooks/queries/useMainCategoryQuery';
import useCategoryButton from '@/hooks/useCategoryButton';
import { questionAtomFamily, questionOrderAtom } from '@/store/question';
import { dehydrate, QueryClient } from '@tanstack/react-query';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { useRecoilValue } from 'recoil';

export async function getStaticProps() {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery(['mainCategories'], getMainCategories);

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
}

const Onboarding = () => {
  const router = useRouter();
  const order = useRecoilValue(questionOrderAtom);
  const question = useRecoilValue(questionAtomFamily(order));
  const { data, isSuccess } = useMainCategoryQuery();
  const { handleClick, isDisabled } = useCategoryButton({ type: 'main' });

  useEffect(() => {
    if (question.basicQuestion.id !== 0) router.reload();
  }, [order]);

  return (
    <div className="h-full">
      <h1 className="text-h2 text-gray-800 text-center pt-[8rem]">희망하는 직무를 선택해주세요</h1>
      {isSuccess && <Select categories={data} />}
      <GNB>
        <Button
          onClick={handleClick}
          buttonType="primary"
          buttonText="작성 완료"
          isDisabled={isDisabled}
        />
      </GNB>
    </div>
  );
};

export default Onboarding;
