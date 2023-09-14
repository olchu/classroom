import { AddIncomingProps } from '@/pages/addIncoming';
import {
  Button,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Select,
  Stack,
  Textarea,
} from '@chakra-ui/react';
import { useFormik } from 'formik';
import { useEffect, useMemo } from 'react';

interface AddCollect {
  studentId: number;
  collectId: number;
  sum: number;
  description: string;
}

const submit = (val: AddCollect, callback: () => void) => {
  fetch('/api/addIncoming', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ ...val, date: new Date(Date.now()) }),
  })
    .then(() => {
      alert('успешно создано');
    })
    .catch((e) => {
      console.log(e);
    });
};

export const AddIncomingForm = ({ data }: { data: AddIncomingProps }) => {
  const { students, collect } = data;

  const {
    handleSubmit,
    handleChange,
    values,
    resetForm,
    setValues,
    setFieldValue,
  } = useFormik<AddCollect>({
    initialValues: {
      studentId: 0,
      collectId: 0,
      sum: 0,
      description: '',
    },
    onSubmit: (values) => submit(values, () => resetForm),
  });

  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const val = e.target.value;

    console.log('val', val, parseInt(val));
    setFieldValue(e.target.name, parseInt(val) || 0);
  };

  useEffect(() => {
    if (values.collectId && values.collectId != 0) {
      const sum = collect.filter((item) => item.id == values.collectId)[0];
      if (sum) setValues({ ...values, sum: sum.sum });
    }
  }, [values.collectId]);

  const isDisabled = useMemo(() => {
    return values.collectId == 0 || values.studentId == 0;
  }, [values.collectId, values.studentId]);

  return (
    <>
      <Heading size={'md'} my={6}>
        Добавление прихода денег
      </Heading>
      <form onSubmit={handleSubmit}>
        <Stack spacing={4}>
          <FormControl>
            <FormLabel>Ученик</FormLabel>
            <Select
              placeholder="Выбрать ученика"
              name="studentId"
              onChange={handleSelectChange}
            >
              {students &&
                students?.map((item) => (
                  <option key={item.id} value={item.id}>
                    {item.secondName} {item.firstName}
                  </option>
                ))}
            </Select>
          </FormControl>
          <FormControl>
            <FormLabel>Сбор</FormLabel>
            <Select
              placeholder="Выбрать сбор"
              name="collectId"
              onChange={handleSelectChange}
            >
              {collect &&
                collect?.map((item) => (
                  <option key={item.id} value={item.id}>
                    {item.title}
                  </option>
                ))}
            </Select>
          </FormControl>
          <FormControl>
            <FormLabel>Сумма</FormLabel>
            <Input
              type="number"
              name="sum"
              value={values.sum}
              onChange={handleChange}
            />
          </FormControl>
          <FormControl>
            <FormLabel>Описание</FormLabel>
            <Textarea
              name="description"
              value={values.description}
              onChange={handleChange}
            />
          </FormControl>

          <Button colorScheme="green" type="submit" isDisabled={isDisabled}>
            Добавить
          </Button>
        </Stack>
      </form>
    </>
  );
};
