import '../styles/globals.css';

import type { AppProps } from 'next/app';
import type { ComponentProps } from 'react';
import GlobalErrorFallback from '@/components/GlobalErrorFallback';
import Layout from '@/components/common/Layout';
import { OverlayProvider } from '@toss/use-overlay';
import QueryClientProvider from '@/components/QueryClientProvider';
import QueryErrorBoundary from '@/components/QueryErrorBoundary';
import RecoilDebugObserver from '@/components/RecoilDebugObserver';
import { RecoilRoot } from 'recoil';
import { Suspense } from 'react';

interface PageProps {
  dehydratedState: ComponentProps<typeof QueryClientProvider>['dehydratedState'];
}

function MyApp({ Component, pageProps }: AppProps<PageProps>) {
  return (
    <OverlayProvider>
      <RecoilRoot>
        <QueryClientProvider dehydratedState={pageProps.dehydratedState}>
          <QueryErrorBoundary ErrorFallback={GlobalErrorFallback}>
            <RecoilDebugObserver />
            <Suspense fallback={<>Global Suspense</>}>
              <Layout>
                <Component {...pageProps} />
              </Layout>
            </Suspense>
          </QueryErrorBoundary>
        </QueryClientProvider>
      </RecoilRoot>
    </OverlayProvider>
  );
}

export default MyApp;
