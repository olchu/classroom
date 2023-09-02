import { ReactElement } from 'react';
import type { AppProps } from 'next/app';
import PageWithLayoutType from '@/types/pageWithLayouts';
import { SessionProvider } from 'next-auth/react';

type AppLayoutProps = AppProps & {
  Component: PageWithLayoutType;
  pageProps: any;
};
function MyApp({
  Component,
  pageProps: { session, ...pageProps },
}: AppLayoutProps) {
  const Layout =
    Component.layout || ((children: ReactElement) => <>{children}</>);
  return (
    <SessionProvider session={session}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </SessionProvider>
  );
}
export default MyApp;
