import { AddCollectForm } from '@/components/addForms/addCollect/AddCollectForm';
import MainLayout from '@/components/layouts/main';
import { StudentsShow } from '@/components/students/StudentsShow';

const AddCollect = () => {
  return (
    <div>
     <AddCollectForm/>
    </div>
  );
};
AddCollect.layout = MainLayout;
export default AddCollect;