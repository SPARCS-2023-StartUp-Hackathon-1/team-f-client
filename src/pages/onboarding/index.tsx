import { getMainCategories } from '@/apis';
import { Button } from '@/components/common/Button';
import { GNB } from '@/components/common/GNB';
import Select from '@/components/common/Select';
import { useMainCategoryQuery } from '@/hooks/queries/useMainCategoryQuery';
import useCategoryButton from '@/hooks/useCategoryButton';
import { dehydrate, QueryClient } from '@tanstack/react-query';

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
  const { data, isSuccess } = useMainCategoryQuery();
  const { handleClick, isDisabled } = useCategoryButton({ type: 'main' });

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
