import { Box, Heading } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
} from '@chakra-ui/react';

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
    const students = response.ok && (await response.json());
    console.log(students);
    setStudents(students);
  };

  useEffect(() => {
    fetchStudents().catch((error) => console.log(error));
  }, []);

  return (
    <Box py={1}>
      <Heading mb={2}>Ученики:</Heading>

      <TableContainer>
        <Table variant="striped" colorScheme="gray" size="sm">
          <Thead>
            <Tr>
              <Th>Ученик</Th>
              <Th>Дата рождения</Th>
            </Tr>
          </Thead>
          <Tbody>
            {students &&
              students?.map(({ firstName, secondName, id, dob }) => {
                const dateFromDob = new Date(dob);
                const dobStr = `${dateFromDob.getDate()}.${
                  dateFromDob.getMonth() + 1
                }.${dateFromDob.getFullYear()}`;
                return (
                  <Tr key={id}>
                    <Td>
                      {firstName} {secondName}
                    </Td>
                    <Td> {dobStr}</Td>
                  </Tr>
                );
              })}
          </Tbody>
        </Table>
      </TableContainer>
    </Box>
  );
};
