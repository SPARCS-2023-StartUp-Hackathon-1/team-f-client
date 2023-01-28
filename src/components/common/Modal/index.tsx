import type { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

export function Modal({ children }: Props) {
  return (
    <div className="p-[16px] rounded-[8px] align-middle relative text-center m-auto w-[322px] bg-gray-0">
      {children}
    </div>
  );
}
