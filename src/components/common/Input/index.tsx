import type { ChangeEvent } from 'react';
import React, { useState } from 'react';

export interface InputProps {
  onChange?: (event: ChangeEvent<HTMLTextAreaElement>) => void;
  value?: string;
}
export const Input = ({ onChange, value }: InputProps) => {
  const [isClicked, setIsClicked] = useState(false);

  const onFocus = () => {
    setIsClicked(true);
  };
  const onBlur = () => {
    setIsClicked(false);
  };

  return (
    <div className="flex-col relative w-full">
      <textarea
        value={value}
        id="input"
        onFocus={onFocus}
        onBlur={onBlur}
        onChange={onChange}
        placeholder="답변을 작성해주세요"
        className="resize-none h-[112px] scrollbar-hide px-[16px] py-[24px] rounded-t-[8px] rounded-bl-[8px] rounded-br-[0px] w-full bg-gray-100 text-subtitle text-gray-700 placeholder:text-subtitle placeholder:text-gray-300 
      focus:outline-none focus:ring-gray-200 focus:ring-[2px] no-scrollbar
      "
      />
      {isClicked === false ? (
        <>
          <div
            className="absolute w-0 h-0 
   border-l-[15px] border-l-transparent
   border-t-[15px] border-t-gray-100
   right-0 bottom-[-11px]
    "
          ></div>
        </>
      ) : (
        <>
          <div
            className="w-0 h-0
 before:border-l-[18px] before:border-l-transparent
 before:border-t-[18px] before:border-t-gray-200
 before:right-[-2px] before:absolute before:bottom-[-15px]
 after:border-l-[14px] after:border-l-transparent
 after:border-t-[15px] after:border-t-gray-100
 after:right-0 after:absolute after:bottom-[-11px]
  "
          ></div>
        </>
      )}
    </div>
  );
};
