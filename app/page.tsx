// Importa tus estilos de Bootstrap aquí si aún no lo has hecho
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import Counter from './components/Counter';

const Page = () => {
  return (
    <div className="d-flex flex-column align-items-center justify-content-center" style={{ height: '100vh' }}>
      <h1 className="mb-4">Página</h1>
      <Counter />
    </div>
  );
};

export default Page;
