import { useState } from 'react';

const useForm = (defaults) => {
  const [values, setValues] = useState(defaults);

  const updateValue = (e) => {
    // check if it's a number and convert
    let { value } = e.target;
    if (e.target.type === 'number') {
      value = parseInt(value);
    }
    setValues({
      // copy the existing values into it
      ...values,
      // update the new value that changed
      [e.target.name]: value,
    });
  };

  const clearValues = () => {
    setValues(defaults);
  };

  return { values, updateValue, clearValues };
};

export default useForm;
