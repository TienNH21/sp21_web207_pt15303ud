import { useState } from 'react';

function Input() {
  const [name, setName] = useState('');
  const onChangeHandler = function (event) {
    setName(event.target.value);
  }

  return (
    <div>
      <input
        onChange={ onChangeHandler }
        type="text"
        autoComplete="off"
        name="name"/>
      <p>Họ tên: { name }</p>
    </div>
  );
}

export default Input;
