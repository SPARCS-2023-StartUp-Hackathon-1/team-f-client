import { getMainCategories } from '@/apis';
import Select from '@/components/common/Select';
import { useMainCategoryQuery } from '@/hooks/queries/useMainCategoryQuery';
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

  return <>{isSuccess && <Select categories={data} />}</>;
};

export default Onboarding;
