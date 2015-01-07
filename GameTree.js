var GameTree = {};
(function(){

  /**
  * evaluator: takes a game state and returns a score from the perspective of the
  * player at turn.
  *
  * generator: takes a game state and returns an array of valid moves and
  * corresponding child states.
  */
  GameTree.create = function(evaluator, generator) {
    var bestmove = [];
    var nodes;
    var solver = {
      negamax : function(state, depth) {
        nodes++;
        if (depth == 0) return evaluator(state);

        var children = generator(state);
        if (children.length == 0) return evaluator(state);

        var best = -Infinity;
        for (var i = 0; i < children.length;i++) {
          var child = children[i];
          var score = -this.negamax(child.state, depth-1);
          if (score > best) {
            best = score;
            bestmove[depth] = child.move;
          }
        }
        return best;
      },
      search : function(state, depth) {
        nodes = 0;
        var ticks = new Date().valueOf();
        var score = this.negamax(state, depth);
        var elapsed = new Date().valueOf() - ticks;
        if (depth % 2) score = -score;
        console.log("nodes searched: " + nodes);
        console.log("nodes/s: " + (nodes / (elapsed / 1000)));
        return {score: score, move: bestmove[depth]};
      }

    };
    return solver;
  }
})();
