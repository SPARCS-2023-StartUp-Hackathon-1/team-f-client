import type { PropsWithChildren } from 'react';
import { useRouter } from 'next/router';

const Layout = ({ children }: PropsWithChildren) => {
  const router = useRouter();
  return (
    <>
      {router.pathname === '/' || router.pathname === '/onboarding/[mainCategoryId]' ? (
        <main className="bg-gray-0 px-[1.6rem] h-full">{children}</main>
      ) : (
        <main className="bg-gray-50 px-[1.6rem] h-full">{children}</main>
      )}
    </>
  );
};

export default Layout;
