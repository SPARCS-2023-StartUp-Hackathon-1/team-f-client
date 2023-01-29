import { Button } from '@/components/common/Button';
import { GNB } from '@/components/common/GNB';
import { Icon } from '@/components/common/Icon';

const QuestionButton = () => {
  return (
    <GNB>
      {' '}
      <div className="flex gap-[1rem]">
        {/* <Button onClick={handleTailButtonClick} buttonType="primary" buttonText="꼬리 질문" /> */}
        {/* <Button */}
        {/* onClick={handleNextButtonClick} */}
        {/* buttonType="sub" */}
        {/* buttonIcon={<Icon iconName="rightArrow" size={24} />} */}
        {/* /> */}
      </div>
    </GNB>
  );
};

export default QuestionButton;
