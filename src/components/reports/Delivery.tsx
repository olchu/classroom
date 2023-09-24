import { AddIncomingProps } from '@/pages';
import {
  TableContainer,
  Table,
  Thead,
  Tr,
  Th,
  Center,
  Tbody,
  Td,
  VStack,
  Text,
  Box,
  Heading,
} from '@chakra-ui/react';
import { BiBlock, BiCheck } from 'react-icons/bi';
import { useMemo } from 'react';

export const Delivery = ({ data }: { data: AddIncomingProps }) => {
  const { students, transIn, collect } = data;

  const hashTransIn = useMemo(() => {
    const returnHash: Record<number, Record<number, number>> = {};
    transIn.forEach(({ studentId, collectId, sum }) => {
      const hashSum =
        (returnHash?.[studentId]?.[collectId]
          ? returnHash?.[studentId][collectId]
          : 0) + sum;
      if (studentId === 27) {
        console.log('hashSum', hashSum);
      }
      returnHash[studentId] = {
        ...returnHash[studentId],
        [collectId]: hashSum,
      };
    });
    console.log('returnHash', returnHash);
    return returnHash;
  }, [transIn]);

  return (
    <Box>
      <Heading size="sm" mb="8" mt="8">
        Остаток денег <Text as="span">234324</Text>
      </Heading>
      <Heading size="md" mb="4">
        Таблица кто что сдал
      </Heading>
      <TableContainer overflowX="scroll">
        <Table variant="striped" colorScheme="gray" size="sm">
          <Thead>
            <Tr>
              <Th>№</Th>
              <Th>Ученик</Th>
              {collect.map((col) => (
                <Th key={col.id}>
                  <VStack alignItems="center">
                    <p>{col.title}</p>
                    <Text fontSize="xs">{col.sum} руб.</Text>
                  </VStack>
                </Th>
              ))}
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
                    <Td>{id}</Td>
                    <Td>
                      {secondName} {firstName}
                    </Td>
                    {collect.map((col) => {
                      const dontGiveAll =
                        hashTransIn?.[id]?.[col.id] !== col.sum;
                      return (
                        <Td key={col.id}>
                          <Center>
                            <Text
                              color={dontGiveAll ? 'red.400' : ''}
                              as={dontGiveAll ? 'b' : 'p'}
                            >
                              {!dontGiveAll ? (
                                <BiCheck />
                              ) : (
                                hashTransIn?.[id]?.[col.id] || <BiBlock />
                              )}
                            </Text>
                          </Center>
                        </Td>
                      );
                    })}
                  </Tr>
                );
              })}
          </Tbody>
        </Table>
      </TableContainer>
    </Box>
  );
};
