import {useState} from 'react';

const useForm = (initialState) => {
  const [formData, setFormData] = useState(initialState);

  const resetForm = () => setFormData(initialState);

  const handleFormChange = (event) => {
    setFormData((prev) => ({...prev, [event.target.name]: event.target.value}));
  };

  return {formData, handleFormChange, resetForm};
};

export default useForm;
