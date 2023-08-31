import { AddIncomingForm } from '@/components/addForms/addIncoming/AddIncomingForm';
import MainLayout from '@/components/layouts/main';
import { GetStaticProps } from 'next';
import prisma from 'prisma/client';

const AddCollect = ({ data }: { data: any }) => {
  console.log(data.students);
  console.log(data.collect);
  return (
    <div>
      <AddIncomingForm data={data}/>
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

  return { props: { data: { students, collect } } };
};
