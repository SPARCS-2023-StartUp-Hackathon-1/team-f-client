import type { ReactNode } from 'react';
import React from 'react';

export interface AIBubbleProps {
  questionChip: ReactNode;
  question: string;
  answerChip?: ReactNode;
  answer?: string;
}

export const AIBubble = ({ questionChip, question, answerChip, answer }: AIBubbleProps) => {
  return (
    <>
      {answer ? (
        <div className="flex-col relative w-full">
          <div className="break-all px-[16px] py-[24px] rounded-t-[8px] rounded-bl-[0px] rounded-br-[8px] w-full bg-gray-0 text-subtitle text-gray-700">
            <div className="mb-[8px]">{questionChip}</div>
            {question}
            <div className="h-[1px] bg-gray-100 my-[16px]"></div>
            <div className="mb-[8px]">{answerChip}</div>
            {answer}
          </div>
          <div
            className="absolute w-0 h-0 
border-r-[15px] border-r-transparent
border-t-[15px] border-t-gray-0
left-0 bottom-[-11px]
"
          />
        </div>
      ) : (
        <div className="flex-col relative w-full">
          <div className="break-all px-[16px] py-[24px] rounded-t-[8px] rounded-bl-[0px] rounded-br-[8px] w-full bg-gray-0 text-subtitle text-gray-700">
            <div className="mb-[8px]">{questionChip}</div>
            {question}
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
