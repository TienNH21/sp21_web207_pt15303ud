import { useState } from 'react';

function ClickCount() {
  const [count, setCount] = useState(0);

  const onClickHandler = function() {
    setCount(count + 1);
  }

  return (
    <div>
      <button onClick={ onClickHandler }>
        Click me
      </button>
      <p>Click { count } times</p>
    </div>
  );
}

export default ClickCount;
