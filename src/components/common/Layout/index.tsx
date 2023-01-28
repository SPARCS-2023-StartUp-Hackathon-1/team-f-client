import { PropsWithChildren } from 'react';

const Layout = ({ children }: PropsWithChildren) => {
  return <main className="bg-gray-50 px-[1.6rem] h-full">{children}</main>;
};

export default Layout;
