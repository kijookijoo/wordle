import './Grid.css'


function Grid({ grid, gridColor }) {

    function getColorClass(rowIndex, colIndex) {
        const color = gridColor[rowIndex][colIndex];
        if (color === "green") return "grid-green";
        if (color === "yellow") return "grid-yellow";
        if (color === "grey") return "grid-grey";
        return "grid-black";
    }

    return (
        <>
            <div className='grid-container'>
                {grid.map((row, rowIndex) => (
                    row.map((col, colIndex) => (
                        <div 
                            key={`${rowIndex}-${colIndex}`} 
                            className={getColorClass(rowIndex, colIndex)}
                        >
                            {col}
                        </div>
                    ))
                ))}
            </div>
        </>
    );
}

export default Grid;