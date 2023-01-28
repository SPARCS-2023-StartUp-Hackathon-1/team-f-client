import { PropsWithChildren, useState } from 'react';

type ButtonType = 'extra' | 'sub' | 'primary' | 'gray';

interface ButtonProps {
  buttonType: ButtonType;
  isDisabled?: boolean;
  buttonText?: string;
  onClick: () => void;
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
    press: 'bg-gray-600',
    error: '',
  },
  primary: {
    none: 'bg-gray-100 h-[5.2rem] rounded-[0.8rem] p-[1.6rem] text-gray-400 text-subtitle',
    default: 'bg-primary-default h-[5.2rem] rounded-[0.8rem] p-[1.6rem] text-gray-0 text-subtitle',
    hover: 'bg-primary-hover h-[5.2rem] rounded-[0.8rem] p-[1.6rem] text-gray-0 text-subtitle',
    press: 'bg-primary-press',
    error: 'bg-system-error h-[5.6rem] rounded-[0.8rem] p-[1.6rem] text-gray-0 text-subtitle',
  },
  gray: {
    none: '',
    default: 'bg-gray-200 h-[5.2rem] rounded-[0.8rem] p-[1.6rem] text-gray-0 text-subtitle',
    hover: 'bg-gray-400 h-[5.2rem] rounded-[0.8rem] p-[1.6rem] text-gray-0 text-subtitle',
    press: 'bg-gray-600',
    error: '',
  },
};

export const Button = ({
  onClick,
  buttonText,
  buttonType,
  isDisabled,
}: PropsWithChildren<ButtonProps>) => {
  return (
    <>
      {isDisabled ? (
        <input
          type="button"
          value={buttonText}
          disabled
          className={`${BUTTON_STYLE[buttonType]['none']} w-full`}
        />
      ) : (
        <button
          onClick={onClick}
          className={`${BUTTON_STYLE[buttonType]['default']} active:${BUTTON_STYLE[buttonType]['press']} w-full`}
        >
          {buttonText}
        </button>
      )}
    </>
  );
};
