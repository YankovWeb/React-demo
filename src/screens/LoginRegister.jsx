import {useState} from 'react';
import Form from '../components/form/Form';
import Button from '../components/button/Button';

const LoginRegister = () => {
  const [isLogin, setIsLogin] = useState(true);
  const tougleHanlderForm = (e) => {
    e.preventDefault();
    setIsLogin(!isLogin);
  };

  const inputsLogin = [
    {
      id: '1',
      name: 'email',
      type: 'email',
      onChange: () => {},
      placeholder: 'Your Email...',
    },
    {
      id: '2',
      name: 'password',
      type: 'password',
      onChange: () => {},
      placeholder: 'Enter Password...',
    },
  ];
  const inputsRegister = [
    {
      id: '3',
      name: 'email',
      type: 'email',
      onChange: () => {},
      placeholder: 'Your Email...',
    },
    {
      id: '4',
      name: 'password',
      type: 'password',
      onChange: () => {},
      placeholder: 'Enter Password...',
    },
    {
      id: '5',
      name: 're-password',
      type: 'password',
      onChange: () => {},
      placeholder: 'repeat Password...',
    },
  ];

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
