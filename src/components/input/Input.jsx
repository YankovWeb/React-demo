/* eslint-disable react/prop-types */
const Input = (props) => {
  const {type, value, onChange, placeholder, name} = props;
  return (
    <input
      name={name}
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
    />
  );
};

export default Input;
