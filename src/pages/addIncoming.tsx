import { AddIncomingForm } from '@/components/addForms/addIncoming/AddIncomingForm';
import MainLayout from '@/components/layouts/main';
import { GetStaticProps } from 'next';
import prisma from 'prisma/client';

export interface StudentsType {
  id: number;
  firstName: string;
  secondName: string;
  dob: Date;
}
export interface CollectingType {
  id: number;
  sum: number;
  title: string;
  description: string;
}
export interface AddIncomingProps {
  students: StudentsType[];
  collect: CollectingType[];
}

const AddCollect = ({ data }: { data: AddIncomingProps }) => {
  console.log(data.collect);
  return (
    <div>
      <AddIncomingForm data={data} />
    </div>
  );
};

AddCollect.layout = MainLayout;
export default AddCollect;

export const getStaticProps: GetStaticProps<{
  data: any;
}> = async () => {
  const studentsSelect = await prisma.student.findMany({
    orderBy: [
      {
        secondName: 'asc',
      },
    ],
  });

  const students = JSON.parse(JSON.stringify(studentsSelect));

  const collectSelect = await prisma.collecting.findMany();

  const collect = JSON.parse(JSON.stringify(collectSelect));

  return { props: { data: { students:students ||[], collect: collect || []} } };
};
