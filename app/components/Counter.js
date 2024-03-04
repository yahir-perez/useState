'use client';
import React, { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };
  
  const reiniciar = () => {
    setCount(0);
  };

  return (
    <div className="d-flex flex-column align-items-center justify-content-center text-center mt-5">
      <h2 className="mb-4">Contador</h2>
      <p className="mb-3">El valor actual es: {count}</p>
      <div className="d-flex justify-content-center">
        <button onClick={increment} className="btn btn-success me-2">Incrementar</button>
        <button onClick={reiniciar} className="btn btn-danger">Reiniciar</button>
      </div>
    </div>
  );
};

export default Counter;
