'use client'
import React, { useState } from 'react';
import Board from './board';

const TicTacToeGame: React.FC = () => {
    const [rejillas, setRejillas] = useState<Array<Array<string | null>>>([Array(9).fill(null)]);
    const [xEsSiguiente, setxEsSiguiente] = useState(true);
    const [numeroDePaso, setnumeroDePaso] = useState(0);

    const handleClick = (i: number) => {
        const nuevaRejilla = rejillas.slice(0, numeroDePaso + 1);
        const actual = nuevaRejilla[nuevaRejilla.length - 1];

        if (actual[i] || calcularGanador(actual)) {
            return;
        }

        const actualizarRejilla = actual.slice();
        actualizarRejilla[i] = xEsSiguiente ? 'X' : 'O';

        setRejillas([...nuevaRejilla, actualizarRejilla]);
        setnumeroDePaso(nuevaRejilla.length);
        setxEsSiguiente(!xEsSiguiente);
    };

    const reiniciarJuego = () => {
        setRejillas([Array(9).fill(null)]);
        setnumeroDePaso(0);
        setxEsSiguiente(true);
    };

    const ganador = calcularGanador(rejillas[numeroDePaso]);
    const estado = ganador ? `El ganador es: ${xEsSiguiente ? 'O' : 'X'}` : `Siguiente jugador: ${xEsSiguiente ? 'X' : 'O'}`;

    return (
        <div>
            <div className='title'>Juego del gato</div>
            <div className="game">
                <div className="game-board">
                    <Board lineaGanadora={ganador} rejillas={rejillas[numeroDePaso]} onClick={(i) => handleClick(i)} />
                </div>
            </div>
            <div className="game-info">
                <div>{estado}</div>
            </div>

            <div className='btn'>
                <button className='text-red-700 hover:text-white border border-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2' onClick={() => reiniciarJuego()}>Reiniciar juego</button>
            </div>
        </div>
    );
};

const calcularGanador = (rejillas: Array<string | null>): Array<number> | null => {
    const lineasGanadoras = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8],
        [0, 3, 6], [1, 4, 7], [2, 5, 8],
        [0, 4, 8], [2, 4, 6]
    ];

    for (const line of lineasGanadoras) {
        const [a, b, c] = line;
        if (rejillas[a] && rejillas[a] === rejillas[b] && rejillas[a] === rejillas[c]) {
            return line;
        }
    }

    return null;
};

export default TicTacToeGame;
