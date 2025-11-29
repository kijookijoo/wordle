## How to Play

**https://quickwordle.vercel.app/**

1. Type any 5 letter English word.
2. Press Enter to submit.
3. Tile colors will update:
   - 🟩 Green — correct letter, correct position
   - 🟨 Yellow — correct letter, wrong position
   - ⬜ Grey — letter not in the word
4. You have 7 attempts to guess the answer.

# Wordle — Built from Scratch

A Wordle clone built with React.

The motivation behind this project came from practicing DSA on LeetCode and wondering how those abstract concepts translate into something people actually use. That thought led me to Wordle, which is an example of how simple data structures like 2D matrices are used for the implementation of a simple yet engaging game.

Wordle is a great example because it uses:

- A 2D character matrix for the board
- Letter frequency maps to evaluate guesses
- State transitions that mirror algorithmic thinking

This project implements full Wordle logic using a 2D matrix structure that handles guesses, evaluates correctness, and updates the grid exactly like the real game.


## Project Structure

```
src/
 ├── components/
 │    ├── Grid.jsx
 │    ├── Keyboard.jsx
 │    ├── Header.jsx
 ├── pages/
 │    └── GamePage.jsx
 ├── App.jsx
 └── main.jsx
```

## Built With

- React
- JavaScript 
- HTML/CSS

## Potential Improvements for the Futur

- Daily mode (new word every 24 hours)
- Smooth animations
- Dictionary validation (connect to database)
- Sound effects
- Mobile compatibility
