import { useSession } from 'next-auth/react';
import { useEffect, useState } from 'react';

type studentTypes = {
  firstName: string;
  secondName: string;
  id: number;
  dob: Date;
};

export const StudentsShow = () => {
  const [students, setStudents] = useState<studentTypes[] | null>(null);

  const fetchStudents = async () => {
    const response = await fetch('/api/getStudents');
    const students = await response.json();
    console.log(students);
    setStudents(students);
  };

  const session = useSession();
  console.log('session', session);

  useEffect(() => {
    fetchStudents().catch((error) => console.log(error));
  }, []);

  return (
    <div>
      <h1>Ученики:</h1>
      <ul>
        {students &&
          students?.map(({ firstName, secondName, id, dob }) => {
            const dateFromDob = new Date(dob);
            const dobStr = `${dateFromDob.getDate()}.${
              dateFromDob.getMonth() + 1
            }.${dateFromDob.getFullYear()}`;
            return (
              <li key={id}>
                {firstName} {secondName} {dobStr}
              </li>
            );
          })}
      </ul>
    </div>
  );
};
