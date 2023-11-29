import React from 'react';
import Square from './square';

const Board: React.FC<BoardProps> = ({ rejillas, onClick, lineaGanadora }) => {
    const colorX = '#5c1212';
    const colorO = '#293963';

    const renderRejillas = (i: number) => {
        const esPlazaGanadora: any = lineaGanadora && lineaGanadora.includes(i);

        return (
            <Square
                key={i}
                value={rejillas[i]}
                onClick={() => onClick(i)}
                esPlazaGanadora={esPlazaGanadora}
                color={rejillas[i] === 'X' ? colorX : rejillas[i] === 'O' ? colorO : ''}
            />
        );
    };

    return (
        <div>
            <div className="board-row">
                {renderRejillas(0)}
                {renderRejillas(1)}
                {renderRejillas(2)}
            </div>
            <div className="board-row">
                {renderRejillas(3)}
                {renderRejillas(4)}
                {renderRejillas(5)}
            </div>
            <div className="board-row">
                {renderRejillas(6)}
                {renderRejillas(7)}
                {renderRejillas(8)}
            </div>
        </div>
    );
};

export default Board;
