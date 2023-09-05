import type { ReactElement } from 'react';
import type { NextPageWithLayout } from './_app';
import MainLayout from '@/components/layouts/main';
import { StudentsShow } from '@/components/students/StudentsShow';
import { signOut } from 'next-auth/react';

const Page: NextPageWithLayout = () => {
  return (
    <div>
      <button onClick={() => signOut()}>dfdf</button>
      <StudentsShow />
    </div>
  );
};

Page.getLayout = function getLayout(page: ReactElement) {
  return <MainLayout>{page}</MainLayout>;
};

export default Page;
