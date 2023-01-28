import { useRouter } from 'next/router';
import type { ChangeEvent } from 'react';
import { useState } from 'react';

import { AIBubble } from '@/components/common/AIBubble';
import { Button } from '@/components/common/Button';
import { Chip } from '@/components/common/Chip';
import { GNB } from '@/components/common/GNB';
import { Header } from '@/components/common/Header';
import { Input } from '@/components/common/Input';
import { PageMark } from '@/components/common/pageMark';
import { useAnswerById } from '@/hooks/queries/useAnswerById';
import { useDefaultQuestionQuery } from '@/hooks/queries/useDefaultQuestionQuery';
import { useMidCategoryByIdQuery } from '@/hooks/queries/useMidCategoryByIdQuery';

const QuestionPage = () => {
  const router = useRouter();
  const midCategoryId = router.query.categoryId;
  const { data: midCategory } = useMidCategoryByIdQuery(Number(midCategoryId));
  const { data: defaultQuestion } = useDefaultQuestionQuery(Number(midCategoryId));
  const [isDisabled, setIsDisabled] = useState(true);
  const [userAns, setUserAns] = useState('');

  const onChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setUserAns(e.target.value);
    if (userAns.trim() !== '') {
      setIsDisabled(false);
    } else {
      setIsDisabled(true);
    }
  };
  if (midCategory == null || defaultQuestion == null) {
    return null;
  }

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { data: answer } = useAnswerById(Number(defaultQuestion.id));

  const onClick = () => {
    sessionStorage.setItem(`${midCategory.id}`, `${userAns}`);
    console.log(answer?.answer);
  };

  return (
    <div className="w-full">
      <Header headerTitle={midCategory.name} />
      <div className="h-[64px] flex items-center">
        <PageMark pageNumber={1} isActive={true} />
      </div>
      <AIBubble
        questionChip={<Chip text={'일반 질문'} chipType={'default'} />}
        question={defaultQuestion.question}
      />
      <Input value={userAns} onChange={e => onChange(e)} />
      <GNB>
        <Button
          onClick={onClick}
          buttonType="primary"
          buttonText="작성 완료"
          isDisabled={isDisabled}
        />
      </GNB>
    </div>
  );
};

export default QuestionPage;
