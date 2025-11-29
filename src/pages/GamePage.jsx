import './GamePage.css'
import Header from '../components/Header';
import Grid from '../components/Grid';
import Keyboard from '../components/Keyboard';

import { useState, useRef, useEffect } from 'react';

function GamePage() {
    const [isGameOver, setIsGameOver] = useState(false);
    const [gameResult, setGameResult] = useState(null);

    const pool = ["ALBUM", "HINGE", "MONEY", "SCRAP", "GAMER", "GLASS", "SCOUR", "BEING", "DELVE", "YIELD", "METAL", "TIPSY", "SLUNG", "FARCE", "GECKO", "SHINE", "CANNY", "MIDST", "BADGE", "HOMER", "TRAIN", "STORY", "HAIRY", "FORGO", "LARVA", "TRASH", "ZESTY", "SHOWN", "HEIST", "ASKEW", "INERT", "OLIVE", "PLANT", "OXIDE", "CARGO", "FOYER", "FLAIR", "AMPLE", "CHEEK", "SHAME", "MINCE", "CHUNK", "ROYAL", "SQUAD", "BLACK", "STAIR", "SCARE", "FORAY", "COMMA", "NATAL", "SHAWL", "FEWER", "TROPE", "SNOUT", "LOWLY", "STOVE", "SHALL", "FOUND", "NYMPH", "EPOXY", "DEPOT", "CHEST", "PURGE", "SLOSH", "THEIR", "RENEW", "ALLOW", "SAUTE", "MOVIE", "CATER", "TEASE", "SMELT", "FOCUS", "TODAY", "WATCH", "LAPSE", "MONTH", "SWEET", "HOARD", "CLOTH", "BRINE", "AHEAD", "MOURN", "NASTY", "RUPEE", "CHOKE", "CHANT", "SPILL", "VIVID", "BLOKE", "TROVE", "THORN", "OTHER", "TACIT", "SWILL", "DODGE", "SHAKE", "CAULK", "AROMA", "CYNIC", "ROBIN", "ULTRA", "ULCER", "PAUSE", "HUMOR", "FRAME", "ELDER", "SKILL", "ALOFT", "PLEAT", "SHARD", "MOIST", "THOSE", "LIGHT", "WRUNG", "COULD", "PERKY", "MOUNT", "WHACK", "SUGAR", "KNOLL", "CRIMP", "WINCE", "PRICK", "ROBOT", "POINT", "PROXY", "SHIRE", "SOLAR", "PANIC", "TANGY", "ABBEY", "FAVOR", "DRINK", "QUERY", "GORGE", "CRANK", "SLUMP", "BANAL", "TIGER", "SIEGE", "TRUSS", "BOOST", "REBUS", "UNIFY", "TROLL", "TAPIR", "ASIDE", "FERRY", "ACUTE", "PICKY", "WEARY", "GRIPE", "CRAZE", "PLUCK", "BRAKE", "BATON", "CHAMP", "PEACH", "USING", "TRACE", "VITAL", "SONIC", "MASSE", "CONIC", "VIRAL", "RHINO", "BREAK", "TRIAD", "EPOCH", "USHER", "EXULT", "GRIME", "CHEAT", "SOLVE", "BRING", "PROVE", "STORE", "TILDE", "CLOCK", "WROTE", "RETCH", "PERCH", "ROUGE", "RADIO", "SURER", "FINER", "VODKA", "HERON", "CHILL", "GAUDY", "PITHY", "SMART", "BADLY", "ROGUE", "GROUP", "FIXER", "GROIN", "DUCHY", "COAST", "BLURT", "PULPY", "ALTAR", "GREAT", "BRIAR", "CLICK", "GOUGE", "WORLD", "ERODE", "BOOZY", "DOZEN", "FLING", "GROWL", "ABYSS", "STEED", "ENEMA", "JAUNT", "COMET", "TWEED", "PILOT", "DUTCH", "BELCH", "OUGHT", "DOWRY", "THUMB", "HYPER", "HATCH", "ALONE", "MOTOR", "ABACK", "GUILD", "KEBAB", "SPEND", "FJORD", "ESSAY", "SPRAY", "SPICY", "AGATE", "SALAD", "BASIC", "MOULT", "CORNY", "FORGE", "CIVIC", "ISLET", "LABOR", "GAMMA", "LYING", "AUDIT", "ROUND", "LOOPY", "LUSTY", "GOLEM", "GONER", "GREET", "START", "LAPEL", "BIOME", "PARRY", "SHRUB", "FRONT", "WOOER", "TOTEM", "FLICK", "DELTA", "BLEED", "ARGUE", "SWIRL", "ERROR", "AGREE", "OFFAL", "FLUME", "CRASS", "PANEL", "STOUT", "BRIBE", "DRAIN", "YEARN", "PRINT", "SEEDY", "IVORY", "BELLY", "STAND", "FIRST", "FORTH", "BOOBY", "FLESH", "UNMET", "LINEN", "MAXIM", "POUND", "MIMIC", "SPIKE", "CLUCK", "CRATE", "DIGIT", "REPAY", "SOWER", "CRAZY", "ADOBE", "OUTDO", "TRAWL", "WHELP", "UNFED", "PAPER", "STAFF", "CROAK", "HELIX", "FLOSS", "PRIDE", "BATTY", "REACT", "MARRY", "ABASE", "COLON", "STOOL", "CRUST", "FRESH", "DEATH", "MAJOR", "FEIGN", "ABATE", "BENCH", "QUIET", "GRADE", "STINK", "KARMA", "MODEL", "DWARF", "HEATH", "SERVE", "NAVAL", "EVADE", "FOCAL", "BLUSH", "AWAKE", "HUMPH", "SISSY", "REBUT", "CIGAR"]
    let currRef = useRef([0, 0]);

    function getRandomIntInclusive(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    // Set answer once when component mounts - never changes
    const answerRef = useRef(null);
    if (answerRef.current === null) {
        const randomIndex = getRandomIntInclusive(0, pool.length - 1);
        answerRef.current = pool[randomIndex];
    }

    const [canGuess, setCanGuess] = useState(false);
    const [grid, setGrid] = useState([
        ["", "", "", "", ""],
        ["", "", "", "", ""],
        ["", "", "", "", ""],
        ["", "", "", "", ""],
        ["", "", "", "", ""],
        ["", "", "", "", ""],
        ["", "", "", "", ""]
    ]);

    const [gridColor, setGridColor] = useState([
        [null, null, null, null, null],
        [null, null, null, null, null],
        [null, null, null, null, null],
        [null, null, null, null, null],
        [null, null, null, null, null],
        [null, null, null, null, null],
        [null, null, null, null, null],
    ]);

    const [letterStates, setLetterStates] = useState({});


    const [inputValue, setInputValue] = useState('');
    const inputRef = useRef(null);

    useEffect(() => {
        const timer = setTimeout(() => {
            if (inputRef.current) {
                inputRef.current.focus();
            }
        }, 100);
        return () => clearTimeout(timer);
    }, []);

    useEffect(() => {
        if (inputRef.current) {
            inputRef.current.focus();
        }
    }, [grid]);


    useEffect(() => {
        const handleClick = (e) => {

            if (e.target !== inputRef.current && inputRef.current) {
                inputRef.current.focus();
            }
        };
        document.addEventListener('click', handleClick);
        return () => document.removeEventListener('click', handleClick);
    }, []);

    function validKey(key) {
        return (key.length === 1 && isAlpha(key)) || key == "ENTER" || key == "BACKSPACE";
    }

    const handleKeyDown = (event) => {
        if (!isGameOver) {


            let key = event.key.toUpperCase();
            let newGrid;
            let row = currRef.current[0];
            let col = currRef.current[1];

            console.log(answerRef.current);

            if (validKey(key)) {
                switch (key) {
                    case "ENTER":
                        if (isRowFull()) {
                            checkAnswer();
                        } else {
                            return;
                        }
                        break;
                    case "BACKSPACE":
                        // TODO
                        // delete previous character
                        // ensure that characters in previous columns are not deleted
                        currRef.current = [row, --col];

                        newGrid = grid.map((row, rowIndex) =>
                            rowIndex === currRef.current[0]
                                ? row.map((col, colIndex) =>
                                    colIndex === currRef.current[1] ? "" : col)
                                : row)

                        setGrid(newGrid);
                        break;
                    default:
                        if (col > 4) {
                            return;
                        }
                        newGrid = grid.map((row, rowIndex) =>
                            rowIndex === currRef.current[0]
                                ? row.map((col, colIndex) =>
                                    colIndex === currRef.current[1] ? key : col)
                                : row)
                        setGrid(newGrid);

                        currRef.current = [row, ++col];

                        if (col === 4) {
                            setCanGuess(!canGuess);
                        }
                }
            }
        }
    }

    function isAlpha(str) {
        return /^[A-Za-z]+$/.test(str);
    }

    function isRowFull() {
        return !grid[currRef.current[0]].includes("");
    }

    function changeColor(targetRow, rowColors) {
        const newColorGrid = gridColor.map((originalRow, rowIndex) =>
            rowIndex === targetRow
                ? rowColors
                : originalRow);

        setGridColor(newColorGrid);
    }

    function checkAnswer() {
        const currentRow = currRef.current[0];
        const guess = grid[currentRow].join("");

        if (guess === answerRef.current) {
            setGameResult("win");
            setIsGameOver(true);
        }

        let rowColors = [];
        const newLetterStates = { ...letterStates };

        for (let i = 0; i < 5; i++) {
            const letter = grid[currentRow][i];
            let color;

            if (answerRef.current[i] === letter) {
                color = "green";
            } else if (answerRef.current.includes(letter)) {
                color = "yellow";
            } else {
                color = "grey";
            }

            rowColors.push(color);

            // Update letter state with priority: green > yellow > grey
            if (!newLetterStates[letter] ||
                (color === "green") ||
                (color === "yellow" && newLetterStates[letter] !== "green")) {
                newLetterStates[letter] = color;
            }
        }

        changeColor(currentRow, rowColors);
        setLetterStates(newLetterStates);

        currRef.current = [currRef.current[0] + 1, 0];
        if (currRef.current[0] > 6) {
            setGameResult("lose");
            setIsGameOver(true);
        }
    }


    return (
        <>
            <Header />

            <input
                ref={inputRef}
                className="user-input"
                type='text'
                onKeyDown={handleKeyDown}
                autoFocus
            />

            <Grid grid={grid} gridColor={gridColor} />

            <Keyboard letterStates={letterStates} />

            {isGameOver && gameResult === "win" && (
                <div className='gameover-message-win'>
                    You Win!
                </div>
            )}

            {isGameOver && gameResult === "lose" && (
                <div className='gameover-message-lose'>
                    You Lose!
                    <p>Answer was {answerRef.current}</p>
                </div>
            )}


        </>

    )
}

export default GamePage;