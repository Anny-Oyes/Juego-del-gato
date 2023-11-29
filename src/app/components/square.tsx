import React from 'react';

const Square: React.FC<SquareProps> = ({ value, onClick, esPlazaGanadora, color }) => {
  const estiloDeRejillas = {
    background: esPlazaGanadora ? 'lightgreen' : 'navajowhite',
    color: color,
  };

  return (
    <button className="square" style={estiloDeRejillas} onClick={onClick}>
      {value}
    </button>
  );
};

export default Square;

