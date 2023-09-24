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
  studentId: number;
  collectId: number;
}
export interface CollectingType {
  id: number;
  sum: number;
  title: string;
  description: string;
}
export interface AddIncomingProps {
  students: StudentsType[];
  transIn: TransInType[];
  collect: CollectingType[];
}

const Page = ({ data }: { data: AddIncomingProps }) => {
  console.log('data', data);
  return (
    <>
      <Delivery data={data} />
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

  const collectSelect = await prisma.collecting.findMany();
  const collect = JSON.parse(JSON.stringify(collectSelect));

  return {
    props: {
      data: {
        students: students || [],
        transIn: transIn || [],
        collect: collect || [],
      },
    },
  };
};

export default Page;
