# Wordle Clone

A Wordle clone I built in React for fun.

## How to play

Guess the 5-letter word in 7 tries. After each guess, the tiles change color:

- 🟩 right letter, right spot
- 🟨 right letter, wrong spot
- ⬜ not in the word

## How it works

**The board** is a 7×5 2D array of characters, one row per guess. The current row and column are tracked in state. Typing a letter fills the next cell, Backspace clears the last one, and Enter locks the row in and moves to the next.

**Checking a guess** takes two passes over the row:

1. First pass: mark exact matches green and subtract those letters from a frequency map of the answer.
2. Second pass: for each remaining letter, if it's still in the frequency map, mark it yellow and decrement the count. Otherwise, mark it grey.

The frequency map is what makes duplicate letters work. If the answer is `APPLE` and you guess `PAPPY`, only two of your P's get colored, not all three.

**The keyboard** keeps its own map of letter → best color seen so far. A key that's been green never gets downgraded to yellow by a later guess.

**Game state** is simple: playing, won, or lost. You win when a row comes back all green and lose when you run out of rows.

## Structure

    src/
     ├── components/
     │    ├── Grid.jsx       # renders the 2D board
     │    ├── Keyboard.jsx   # on-screen keyboard + key colors
     │    └── Header.jsx
     ├── pages/
     │    └── GamePage.jsx   # game state and guess logic
     ├── App.jsx
     └── main.jsx

## Stack

React, JavaScript, HTML/CSS.
