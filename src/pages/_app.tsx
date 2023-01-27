import type { AppProps } from 'next/app';
import type { ComponentProps } from 'react';
import { Suspense } from 'react';
import { RecoilRoot } from 'recoil';

import GlobalErrorFallback from '@/components/GlobalErrorFallback';
import QueryClientProvider from '@/components/QueryClientProvider';
import QueryErrorBoundary from '@/components/QueryErrorBoundary';
import RecoilDebugObserver from '@/components/RecolDebugObserver';

interface PageProps {
  dehydratedState: ComponentProps<typeof QueryClientProvider>['dehydratedState'];
}

function MyApp({ Component, pageProps }: AppProps<PageProps>) {
  return (
    <RecoilRoot>
      <QueryClientProvider dehydratedState={pageProps.dehydratedState}>
        <QueryErrorBoundary ErrorFallback={GlobalErrorFallback}>
          <RecoilDebugObserver />
          <Suspense fallback={<>Global Suspense</>}>
            <Component {...pageProps} />
          </Suspense>
        </QueryErrorBoundary>
      </QueryClientProvider>
    </RecoilRoot>
  );
}

export default MyApp;
