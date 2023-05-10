import React from 'react';
import AddNumber from './AddNumber';

function AddNumberRoot({ number, setData }) {
  // 자식에서 전달받아 업데이트
  const getData = (data) => {
    setData(data);
  };

  return (
    <div>
      <h1>Add Number Root</h1>
      <AddNumber number={number} setData={getData} />
    </div>
  );
}

export default AddNumberRoot;
