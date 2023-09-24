import type { ReactElement } from 'react';
import type { NextPageWithLayout } from './_app';
import MainLayout from '@/components/layouts/main';
import { Delivery } from '@/components/reports/Delivery';
import prisma from 'prisma/client';
import { GetStaticProps } from 'next';

export interface StudentsType {
  id: number;
  firstName: string;
  secondName: string;
  dob: Date;
}
export interface TransInType {
  id: number;
  sum: number;
  title: string;
  description: string;
}
export interface AddIncomingProps {
  students: StudentsType[];
  collect: TransInType[];
}

const Page = ({ data }: { data: AddIncomingProps }) => {
  console.log('data', data);
  return (
    <>
      <Delivery />
    </>
  );
};

Page.getLayout = function getLayout(page: ReactElement) {
  return <MainLayout>{page}</MainLayout>;
};

export const getStaticProps: GetStaticProps<{
  data: any;
}> = async () => {
  const transInSelect = await prisma.transIn.findMany();
  const transIn = JSON.parse(JSON.stringify(transInSelect));

  const studentsSelect = await prisma.student.findMany();
  const students = JSON.parse(JSON.stringify(studentsSelect));

  return {
    props: { data: { students: students || [], transIn: transIn || [] } },
  };
};

export default Page;
