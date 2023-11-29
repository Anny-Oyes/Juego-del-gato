interface BoardProps {
    rejillas: Array<string | null>;
    onClick: (i: number) => void;
    lineaGanadora: Array<number> | null;
}