import { AddCollectForm } from '@/components/addForms/addCollect/AddCollectForm';
import MainLayout from '@/components/layouts/main';
import { StudentsShow } from '@/components/students/StudentsShow';
import { ReactElement } from 'react';

const AddCollect = () => {
  return (
    <div>
      <AddCollectForm />
    </div>
  );
};

AddCollect.getLayout = function getLayout(page: ReactElement) {
  return <MainLayout>{page}</MainLayout>;
};

export default AddCollect;
