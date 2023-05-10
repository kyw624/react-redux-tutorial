import React, { useState } from 'react';

function AddNumber({ number, setData }) {
  const [size, setSize] = useState(0);

  const onClickInput = () => {
    setData(number + size);
  };

  const onChangeInput = (e) => {
    setSize(parseInt(e.target.value));
  };

  return (
    <div>
      <h1>Add Number</h1>
      <input type="button" value="+" onClick={onClickInput} />
      <input type="text" value={size} onChange={onChangeInput} />
    </div>
  );
}

export default AddNumber;
