import type { ReactElement } from 'react';
import type { NextPageWithLayout } from './_app';
import MainLayout from '@/components/layouts/main';

const Page: NextPageWithLayout = () => {
  return <>hello</>;
};

Page.getLayout = function getLayout(page: ReactElement) {
  return <MainLayout>{page}</MainLayout>;
};

export default Page;
