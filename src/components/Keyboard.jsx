import './Keyboard.css'

export function Keyboard({ letterStates = {} }) {
    const layout = [
        'QWERTYUIOP'.split(''),
        'ASDFGHJKL'.split(''),
        'ZXCVBNM'.split('')
    ];

    function getKeyClass(letter) {
        const state = letterStates[letter];
        if (state === 'green') return 'keyboard-cap-green';
        if (state === 'yellow') return 'keyboard-cap-yellow';
        if (state === 'grey') return 'keyboard-cap-grey';
        return 'keyboard-cap-grey'; // default
    }

    return (<>
        <div className='keyboard-container'>
            {layout.map((row, rowIndex) => (
                <div key={rowIndex} className='keyboard-row'>
                    {row.map((letter, letterIndex) => (
                        <div key={letter} className={getKeyClass(letter)}>
                            {letter}
                        </div>
                    ))}
                </div>
            ))}
        </div>
    </>);
}

export default Keyboard;