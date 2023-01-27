import { Icon } from '../Icon';

type SelectType = 'default' | 'transparent' | 'selected';

interface SelectProps {
  text: string;
  selectType?: SelectType;
}

const SELECT_STYLE = {
  default: 'bg-gray-0',
  transparent: 'bg-gray-100',
  selected: 'bg-gray-0 border-2 border-primary-default',
};

export const Select = ({ text, selectType = 'default' }: SelectProps) => {
  return (
    <li
      className={`flex justify-between items-center h-[5.6rem] rounded-[0.8rem] p-[1.6rem] ${SELECT_STYLE[selectType]}`}
    >
      <p className="text-b1">{text}</p>
      {selectType === 'selected' && <Icon width={18} height={14} iconName="check" />}
    </li>
  );
};
