import React from 'react';

const BarraDeBusca = () => {
  const handleSearch = (query) => {
    // Lógica de busca
  };

  return (
    <div>
      <input type="text" placeholder="Buscar" onChange={(e) => handleSearch(e.target.value)} />
      <button>Buscar</button>
    </div>
  );
};

export default BarraDeBusca;