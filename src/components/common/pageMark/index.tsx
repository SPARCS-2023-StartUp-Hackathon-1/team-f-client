export interface PageMarkProps {
  pageNumber: number;
  isActive: boolean;
}

export const PageMark = ({ pageNumber, isActive }: PageMarkProps) => {
  return (
    <div
      className={`flex w-[36px] h-[36px] text-b2 items-center justify-center ${
        isActive
          ? 'text-primary-default border-2 border-primary-default rounded-[50%] bg-gray-0'
          : 'text-gray-300 bg-gray-0 rounded-[50%]'
      }`}
    >
      {pageNumber}
    </div>
  );
};
