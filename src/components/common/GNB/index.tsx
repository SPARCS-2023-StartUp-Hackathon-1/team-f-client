import type { ReactNode } from 'react';

export interface GNBProps {
  buttonNode: ReactNode;
}

export const GNB = ({ buttonNode }: GNBProps) => {
  return <div className="flex justify-between p-[16px] w-full bg-gray-0">{buttonNode}</div>;
};
