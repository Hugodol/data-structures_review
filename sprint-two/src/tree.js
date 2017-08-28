var Tree = function(value) {
  var newTree = {};
  newTree.value = value;
  newTree.children = [];
  _.extend(treeMethods);
  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  const newChild = Tree(value);
  this.children.push(newChild);
};

treeMethods.contains = function(target) {
};



/*
 * Complexity: What is the time complexity of the above functions?
 */
