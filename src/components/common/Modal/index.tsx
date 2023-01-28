import type { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

export function Modal({ children }: Props) {
  return (
    <div className="z-10 relative p-[16px] rounded-[8px] align-middle text-center m-auto w-[322px] bg-gray-0">
      {children}
    </div>
  );
}
