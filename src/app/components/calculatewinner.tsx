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

export { calcularGanador };
