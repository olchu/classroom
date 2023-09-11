import { AddIncomingProps } from '@/pages/addIncoming';
import { useFormik } from 'formik';
import { useEffect } from 'react';

interface AddCollect {
  studentId: number;
  collectId: number;
  sum: number;
  description: string;
}

const submit = (val: AddCollect, callback: () => void) => {
  console.log(val);
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

  return (
    <div>
      <h2>Добавление прихода денег</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Ученик
          <select name="studentId" onChange={handleSelectChange}>
            <option key={0} value={0}></option>
            {students &&
              students?.map((item) => (
                <option key={item.id} value={item.id}>
                  {item.secondName} {item.firstName}
                </option>
              ))}
          </select>
        </label>
        <label>
          Сбор
          <select name="collectId" onChange={handleSelectChange}>
            <option key={0} value={0}></option>
            {collect &&
              collect?.map((item) => (
                <option key={item.id} value={item.id}>
                  {item.title}
                </option>
              ))}
          </select>
        </label>
        <label>
          Сумма
          <input
            type="number"
            name="sum"
            value={values.sum}
            onChange={handleChange}
          />
        </label>
        <label>
          Описание
          <textarea
            name="description"
            value={values.description}
            onChange={handleChange}
          />
        </label>
        <button type="submit">Добавить</button>
      </form>
    </div>
  );
};
