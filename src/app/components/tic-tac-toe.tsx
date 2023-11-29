'use client'
import React, { useState } from 'react';
import Board from './board';
import ResetButton from './button';
import { calcularGanador } from './calculatewinner';

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

            <ResetButton onClick={reiniciarJuego} />
        </div>
    );
};

export default TicTacToeGame;
