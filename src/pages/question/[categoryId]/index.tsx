import { AIBubble } from '@/components/common/AIBubble';
import { Header } from '@/components/common/Header';
import { Input } from '@/components/common/Input';
import { PageMark } from '@/components/common/pageMark';
import { useMidCategoryByIdQuery } from '@/hooks/queries/useMidCategoryByIdQuery';
import { useRouter } from 'next/router';

const QuestionPage = () => {
  const router = useRouter();
  console.log(router);
  const { data } = useMidCategoryByIdQuery(1);
  if (data?.name == null) {
    return null;
  }

  return (
    <div className="w-full">
      <Header headerTitle={data.name} />
      <PageMark pageNumber={1} isActive={true} />
      <AIBubble questionChip={<>hi</>} question={'hihihihhi'} />
      <Input />
    </div>
  );
};

export default QuestionPage;
