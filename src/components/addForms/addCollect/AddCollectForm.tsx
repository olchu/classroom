import { SyntheticEvent } from 'react';
import { useFormik } from 'formik';

interface AddCollect {
  title: string;
  sum: number;
  description: string;
}

const submit = (val: AddCollect, callback: () => void) => {
  fetch('/api/addCollect', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(val),
  })
    .then(() => {
      alert('успешно создано');
    })
    .catch((e) => {
      console.log(e);
    });
};

export const AddCollectForm = () => {
  const { handleSubmit, handleChange, values, resetForm } =
    useFormik<AddCollect>({
      initialValues: {
        title: '',
        sum: 0,
        description: '',
      },
      onSubmit: (values) => submit(values, () => resetForm),
    });

  return (
    <div>
      <h2>Добавление нового сбора средств</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Наименование
          <input
            type="text"
            name="title"
            value={values.title}
            onChange={handleChange}
          />
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
