import { AIBubble } from '@/components/common/AIBubble';
import { Header } from '@/components/common/Header';
import { Input } from '@/components/common/Input';
import { PageMark } from '@/components/common/pageMark';

const QuestionPage = () => {
  return (
    <div className="w-full">
      <Header headerTitle={'html'} />
      <PageMark pageNumber={1} isActive={true} />
      <AIBubble questionChip={<>hi</>} question={'hihihihhi'} />
      <Input />
    </div>
  );
};

export default QuestionPage;
