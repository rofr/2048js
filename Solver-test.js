
var t = {
  val: 7,
  child:0,
  children: [
     {
       val:6,
       child:0,
       children:[
        {val:7,
          child:0,
          children:[
          {val:4},
          {val:7}
          ]},
        {val:8,
          child:1,
          children:[
          {val:8},
          {val:4}
          ]},
        {val:6,
          child: 2,
          children:[
          {val:3},
          {val:6}
          ]},
       ]
     },
     {
       val:7,
       child:1,
       children:[
        {val:8,
          child: 0,
          children:[
          {val:7},
          {val:8}
          ]},
        {val:7,
          child: 1,
          children:[
          {val:5},
          {val:7}
          ]},
       ]
     }
  ]
};

Array.prototype.map = function(func) {
    var result = [];
    for (var i = 0; i < this.length; i++) result.push(func(this[i],i));
    return result;
};

function eval(state) {
  return state.val;
}

function generate(state) {
  if (!state.children) return [];
  return state.children.map(function(n,i){
    return {state:n, transition: i}
  });
}

var gametree = GameTree.create(eval,generate);
var result = gametree.search(t, 2);
console.log(result);
