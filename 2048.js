var Game = {};

Game.create = function(b,s){
  var board = b ? b : [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
  var score = s ? s : 0;
  var game = {
    score : function(){
      return score;
    },
    isGameOver : function() {
      return this.emptySquares() == 0 &&
             this.clone().up().equals(this) &&
             this.clone().down().equals(this) &&
             this.clone().right().equals(this) &&
             this.clone().left().equals(this);
    },
    emptySquares : function(){
      var empty = 0;
      for(var i = 0; i < 16;i++) if (board[i]==0) empty++;
      return empty;
    },
    rand : function() {
      while(true) {
        var idx = Math.round(Math.random() * 16);
        if (board[idx] == 0) {
          board[idx] = Math.random() >= 0.5 ? 2 : 4;
          break;
        }
      }
    },

    pack:function(arr)
    {
      //make a copy, skipping zeros
      var numbers = [];
      for(var i=0;i<4;i++){
        var number = board[arr[i]];
        if (number > 0) numbers.push(number);
      }

      //join adjacent duplicates
      var idx = 0;
      while (idx < 4) {
        if (numbers[idx] > 0 && numbers[idx] == numbers[idx+1]) {
          numbers[idx] *= 2;
          score += numbers[idx];
          numbers.splice(idx+1,1);
        }
        idx++;
      }

      //right pad with zeros back to length 4
      while(numbers.length < 4) numbers.push(0);
      for(var i=0; i < 4;i++) {
        board[arr[i]] = numbers[i];
      }
    },

    move:function(){
      var before = this.clone();
      for(var i = 0; i < arguments.length;i++)
        this.pack(arguments[i]);
      if(!this.equals(before) && this.emptySquares()>0) this.rand();
      return this;
    },

    equals : function(that)
    {
      for(var i = 0; i < board.length; i++)
        {
          if (this.get(i) != that.get(i)) return false;
        }
        return true;
    },

    up:function(){
      return this.move(
        [0,4,8,12],
        [1,5,9,13],
        [2,6,10,14],
        [3,7,11,15]);
    },

    down:function(){
      return this.move(
        [12,8,4,0],
        [13,9,5,1],
        [14,10,6,2],
        [15,11,7,3]);
    },
    left:function(){
      return this.move(
        [0,1,2,3],
        [4,5,6,7],
        [8,9,10,11],
        [12,13,14,15]);
    },
    right:function(){
      return this.move(
        [3,2,1,0],
        [7,6,5,4],
        [11,10,9,8],
        [15,14,13,12]);
    },
    get: function(idx) {
      if (idx >= 0) return board[idx];
      else return board;
    },

    clone : function() {
      return Game.create(JSON.parse(JSON.stringify(board)), score);
    }
  };
  if (!b) {
    game.rand();
    game.rand();
  }
  return game;
}
