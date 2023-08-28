import MainLayout from '@/components/layouts/main';
import { StudentsShow } from '@/components/students/StudentsShow';

const Home = () => {
  return (
    <div>
      <StudentsShow />
    </div>
  );
};
Home.layout = MainLayout;
export default Home;
