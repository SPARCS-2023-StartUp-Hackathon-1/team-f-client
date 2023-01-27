import type { PropsWithChildren } from 'react';

type ButtonType = 'extra' | 'sub' | 'primary' | 'gray';
type ButtonStyleType = 'none' | 'default' | 'hover' | 'press' | 'error';

interface ButtonProps {
  buttonType: ButtonType;
  buttonStyle: ButtonStyleType;
}

const BUTTON_STYLE = {
  extra: {
    none: '',
    default: 'bg-[#EDEFFF] w-[6rem] h-[4rem] rounded-[0.57rem] text-b1 text-primary-default',
    hover: '',
    press: '',
    error: '',
  },
  sub: {
    none: '',
    default:
      'bg-gray-200 w-[5.2rem] h-[5.2rem] rounded-[0.8rem] p-[1.6rem] text-gray-0 text-subtitle',
    hover:
      'bg-gray-400 w-[5.2rem] h-[5.2rem] rounded-[0.8rem] p-[1.6rem] text-gray-0 text-subtitle',
    press:
      'bg-gray-600 w-[5.2rem] h-[5.2rem] rounded-[0.8rem] p-[1.6rem] text-gray-0 text-subtitle',
    error: '',
  },
  primary: {
    none: 'bg-gray-100 h-[5.2rem] rounded-[0.8rem] p-[1.6rem] text-gray-400 text-subtitle w-full',
    default:
      'bg-primary-default h-[5.2rem] rounded-[0.8rem] p-[1.6rem] text-gray-0 text-subtitle w-full',
    hover:
      'bg-primary-hover h-[5.2rem] rounded-[0.8rem] p-[1.6rem] text-gray-0 text-subtitle w-full',
    press:
      'bg-primary-press h-[5.2rem] rounded-[0.8rem] p-[1.6rem] text-gray-0 text-subtitle w-full',
    error:
      'bg-system-error h-[5.6rem] rounded-[0.8rem] p-[1.6rem] text-gray-0 text-subtitle w-full',
  },
  gray: {
    none: '',
    default: 'bg-gray-200 h-[5.2rem] rounded-[0.8rem] p-[1.6rem] text-gray-0 text-subtitle w-full',
    hover: 'bg-gray-400 h-[5.2rem] rounded-[0.8rem] p-[1.6rem] text-gray-0 text-subtitle w-full',
    press: 'bg-gray-600 h-[5.2rem] rounded-[0.8rem] p-[1.6rem] text-gray-0 text-subtitle w-full',
    error: '',
  },
};

export const Button = ({ children, buttonType, buttonStyle }: PropsWithChildren<ButtonProps>) => {
  return <button className={` ${BUTTON_STYLE[buttonType][buttonStyle]}`}>{children}</button>;
};
