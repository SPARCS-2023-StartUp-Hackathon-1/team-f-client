type ChipType = 'question' | 'answer' | 'default';
export interface ChipProps {
  text: string;
  chipType: ChipType;
}

const CHIP_COLOR = {
  question: 'bg-secondary-default text-gray-0',
  answer: 'bg-primary-default text-gray-0',
  default: 'bg-gray-50 text-gray-300',
};
export const Chip = ({ text, chipType }: ChipProps) => {
  return (
    <div className={`w-fit px-[8px] py-[4px] rounded-[80px] text-caption ${CHIP_COLOR[chipType]}`}>
      {text}
    </div>
  );
};
