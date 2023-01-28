import type { PropsWithChildren } from 'react';

export const GNB = ({ children }: PropsWithChildren) => {
  return (
    <nav className="fixed bottom-0 left-0 w-full p-[1.6rem] bg-gray-0">
      <div className="">{children}</div>
    </nav>
  );
};
