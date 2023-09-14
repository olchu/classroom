import type { ReactElement } from 'react';
import type { NextPageWithLayout } from './_app';
import MainLayout from '@/components/layouts/main';
import { StudentsShow } from '@/components/students/StudentsShow';

const Page: NextPageWithLayout = () => {
  return (
    <>
      <StudentsShow />
    </>
  );
};

Page.getLayout = function getLayout(page: ReactElement) {
  return <MainLayout>{page}</MainLayout>;
};

export default Page;
