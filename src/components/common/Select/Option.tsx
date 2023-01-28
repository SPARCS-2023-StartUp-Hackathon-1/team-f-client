import { Icon } from '../Icon';
import useSelect from '../../../hooks/useSelect';

interface OptionProps {
  id: number;
  name: string;
}

const OPTION_STYLE = {
  default: 'bg-gray-0',
  selected: 'bg-gray-0 border-2 border-primary-default',
};

export const Option = ({ id, name }: OptionProps) => {
  const { selectRef, handleSelect, selectedId } = useSelect({ type: 'main' });
  const selected = id === selectedId ? 'selected' : 'default';

  return (
    <li
      id={`${id}`}
      ref={selectRef}
      className={`flex justify-between items-center h-[5.6rem] rounded-[0.8rem] p-[1.6rem] mt-[1rem] ${OPTION_STYLE[selected]}`}
      onClick={handleSelect}
    >
      <p className="text-b1">{name}</p>
      {selected === 'selected' ? (
        <Icon width={18} height={14} iconName="check" />
      ) : (
        <div className="w-[1.8rem] h-[1.4rem]"></div>
      )}
    </li>
  );
};
