## 2048
Play using the arrow keys or sit back and watch while an AI algorithm plays. You can try it out here:

http://rofr.github.io/2048js

This is an evening project I did with my children just for fun. The focus was on game representation and play so sorry about the lacking UI. Swipe is not supported so you need to use the arrow keys on the keyboard. It works on my machine using Chrome.

Contact? http://twitter.com/robertfriberg

## AI
The AI is based on the minimax algorithm, where the random tile placed between your moves counts as the opponent.

Number of nodes search and nodes/s are written to the console. Also you can adjust how many plies ahead are considered by changing the window.depth variable in the console. Default is 4 which is fun for watching the animation but very poor AI. If you increase to 6 or 8 it will run very slowly (minutes per move) but with stronger play. There's a bug in my negamax (a variation of minimax) algorithm so odd depths aren't working.

The evaluation function used is very naive, it simply maximizes the number of empty squares.

## Possible improvements
Besides an improved eval function I'm probably done with this, I have more important things to do. But here are some suggestions if anyone would like to contribute. Pull requests are welcome!

* Play using swipe events
* Support more browsers
* Improved design and styling
* Sliding tile animations
* Responsive design
* High scores to local storage
* Set search depth via UI
* Time based search
* Show AI progress in the UI
* Support for 3x3, 5x5, 6x6 grids
* Performance optimizations
* Add more evaluation functions to pass to the minimax algorithm
* Choose evaluation function to use in UI
* Alpha beta pruning and move ordering
