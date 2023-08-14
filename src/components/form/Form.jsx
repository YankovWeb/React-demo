/* eslint-disable react/prop-types */

import Input from '../input/Input';

const Form = (props) => {
  const {formData, children} = props;

  return (
    <form>
      {formData.map((input) => (
        <Input
          key={input.id}
          name={input.name}
          type={input.type}
          onChange={input.onChange}
          placeholder={input.placeholder}
        />
      ))}
      {children}
    </form>
  );
};

export default Form;
