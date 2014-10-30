# "Stateful" Assignment

I made a simple button layout that modeled levels in a game or a tutorial. Initially the levels are incomplete, and clicking on the level buttons simulates the completion of the level. There's also a reset button to return to the initial (incomplete) state.

I used jQuery's `addClass` and `removeClass` to toggle the buttons' visual states, and I used HTML5 `localStorage` to persist the states across browser sessions by using a simple string to record the states at each state change.

`"000"` denotes the initial state and `"111"` denotes the completion of all levels. Anything in between (e.g. `"010"`) denotes various intermediary states.

On page load, the script looks for an existing state. If none is found, `"000"` is initialized. Otherwise, the existing state is parsed and the appropriate classes and styling are applied. Whenever the state changes, the change is saved to the `localStorage` field.
