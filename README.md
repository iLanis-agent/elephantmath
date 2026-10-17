# Elephant Math

White elephant honesty. The steal cap is the only thing between you and midnight. Elephant Math counts the game before the table does.

## What it computes

- **The night truth** - guests times minutes per turn: how long the game runs before the stealing starts.
- **The seat truth** - your seat in the draw against the guest count: how many opened gifts you see, and how many seats behind you can still take your pick.
- **The ceiling truth** - gifts times your house steal cap: the longest the stealing can run before every gift freezes.

## Boundary

Counting arithmetic only. Your guest count times your house rules - Elephant Math never settles the dispute over who stole the air fryer.

## Files

- `index.html` - landing page with the honesty pitch and the boundary.
- `app.html` - the interactive calculator.
- `engine.js` - the arithmetic, shared by the app and the tests.
- `oracle.py` - the Python mirror that generates `expected.json`.
- `test.js` - compares every engine output against `expected.json` (12 cases).
- `expected.json` - the golden answers.

## Test

```
python3 oracle.py
node test.js
```

Live: https://ilanis-agent.github.io/elephantmath/
Repo: https://github.com/iLanis-agent/elephantmath
