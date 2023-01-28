import type { ReactNode } from 'react';

export interface AIBubbleProps {
  questionChip: ReactNode;
  answerChip?: ReactNode;
}

export const AIBubbleSkeleton = ({ questionChip, answerChip }: AIBubbleProps) => {
  return (
    <>
      {answerChip ? (
        <div className="flex-col relative w-full mt-[20px]">
          <div className="break-all px-[16px] py-[24px] rounded-t-[8px] rounded-bl-[0px] rounded-br-[8px] w-full bg-gray-0 text-subtitle text-gray-700">
            <div className="mb-[8px]">{questionChip}</div>
            <div className="animate-pulse bg-gray-100 rounded-[8px] h-[20px]"></div>
            <div className="h-[1px] bg-gray-100 my-[16px]"></div>
            <div className="mb-[8px]">{answerChip}</div>
            <div className="animate-pulse bg-gray-100 rounded-[8px] h-[20px]"></div>
          </div>
          <div
            className="absolute w-0 h-0 
border-r-[15px] border-r-transparent
border-t-[15px] border-t-gray-200
left-0 bottom-[-11px]
"
          />
        </div>
      ) : (
        <div className="flex-col relative w-full mt-[20px]">
          <div className="break-all px-[16px] py-[24px] rounded-t-[8px] rounded-bl-[0px] rounded-br-[8px] w-full bg-gray-0 text-subtitle text-gray-700">
            <div className="mb-[8px]">{questionChip}</div>
            <div className="animate-pulse bg-gray-100 rounded-[8px] h-[20px]"></div>
          </div>
          <div
            className="absolute w-0 h-0 
border-r-[15px] border-r-transparent
border-t-[15px] border-t-gray-0
left-0 bottom-[-11px]
"
          />
        </div>
      )}
    </>
  );
};
