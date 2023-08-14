/* eslint-disable react-hooks/exhaustive-deps */
import {useEffect, useState} from 'react';
import Form from '../components/form/Form';
import Button from '../components/button/Button';
import useForm from '../hooks/useForm';

const LoginRegister = () => {
  const [isLogin, setIsLogin] = useState(true);
  const {formData, handleFormChange, resetForm} = useForm({
    email: '',
    password: '',
    're-password': '',
  });
  const tougleHanlderForm = (e) => {
    resetForm();
    e.preventDefault();
    setIsLogin(!isLogin);
  };
  console.log(formData);

  const inputsLogin = [
    {
      id: '1',
      name: 'email',
      type: 'email',
      onChange: handleFormChange,
      placeholder: 'Your Email...',
      value: formData.email,
    },
    {
      id: '2',
      name: 'password',
      type: 'password',
      onChange: handleFormChange,
      placeholder: 'Enter Password...',
      value: formData.password,
    },
  ];
  const inputsRegister = [
    {
      id: '3',
      name: 'email',
      type: 'email',
      onChange: handleFormChange,
      placeholder: 'Your Email...',
      value: formData.email,
    },
    {
      id: '4',
      name: 'password',
      type: 'password',
      onChange: handleFormChange,
      placeholder: 'Enter Password...',
      value: formData.password,
    },
    {
      id: '5',
      name: 're-password',
      type: 'password',
      onChange: handleFormChange,
      placeholder: 'repeat Password...',
      value: formData['re-password'],
    },
  ];
  useEffect(() => resetForm(), [isLogin]);
  return (
    <>
      <h1>{isLogin ? 'Login' : 'Register'}</h1>
      <Form formData={isLogin ? inputsLogin : inputsRegister}>
        <div style={{margin: '10px', display: 'flex', gap: '8px'}}>
          <Button
            type={'m'}
            text={isLogin ? 'Create account' : 'Go to Login'}
            onClick={tougleHanlderForm}
            backgroundColor={'grey'}
            color={'black'}
          />
          <Button
            type={'m'}
            text={isLogin ? 'Login' : 'Register'}
            backgroundColor={'green'}
            color={''}
          />
        </div>
      </Form>
    </>
  );
};

export default LoginRegister;
