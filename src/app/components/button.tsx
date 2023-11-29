import React from 'react';

interface ResetButtonProps {
    onClick: () => void;
}

const ResetButton: React.FC<ResetButtonProps> = ({ onClick }) => {

    return (
        <div className='btn'>
            <button className='text-red-700 hover:text-white border border-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2' onClick={onClick}>
                Reiniciar juego
            </button>
        </div>
    );
};

export default ResetButton;
