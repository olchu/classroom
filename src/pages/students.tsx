import MainLayout from '@/components/layouts/main';
import { StudentsShow } from '@/components/students/StudentsShow';
import { ReactElement } from 'react';

const Students = () => {
  return (
    <div>
      <StudentsShow />
    </div>
  );
};

Students.getLayout = function getLayout(page: ReactElement) {
  return <MainLayout>{page}</MainLayout>;
};

export default Students;
