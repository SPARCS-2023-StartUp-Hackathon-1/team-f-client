export interface UserBubbleProps {
  answer: string;
}
export const UserBubble = ({ answer }: UserBubbleProps) => {
  return (
    <div className="flex-col relative w-full">
      <div className="break-all px-[16px] py-[24px] rounded-t-[8px] rounded-bl-[8px] rounded-br-[0px] w-full bg-primary-default text-subtitle text-gray-0 mt-[20px]">
        {answer}
      </div>
      <div
        className="absolute w-0 h-0 
     border-l-[15px] border-l-transparent
     border-t-[15px] border-t-primary-default
     right-0 bottom-[-11px]
      "
      />
    </div>
  );
};
