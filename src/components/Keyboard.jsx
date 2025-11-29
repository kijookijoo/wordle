import './Keyboard.css'

export function Keyboard() {
    const layout = [
        'QWERTYUIOP'.split(''),
        'ASDFGHJKL'.split(''),
        'ZXCVBNM'.split('')
    ];

    return (<>
        <div className='keyboard-container'>
            {layout.map((row, rowIndex) => (
                <div key={row} className='keyboard-row'>
                    {row.map((letter, letterIndex) => (
                        <div key={letter} className='keyboard-cap'>
                            {letter}
                        </div>
                    ))}
                </div>
            ))}
        </div>


    </>);
}

export default Keyboard;