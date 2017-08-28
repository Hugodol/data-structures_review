var Tree = function(value) {
  this.value = value;
  this.children = [];
};

Tree.prototype.addChild = function(value) {
  const newChild = new Tree(value);
  this.children.push(newChild);
};

Tree.prototype.contains = function(target, node = this) {
  if (node.value === target) {
    return true;
  } else if (node.children.length > 0) {
    for (let i = 0; i < node.children.length; i++) {
      if (this.contains(target, node.children[i])) {
        return true;
      }
    }
  }
  return false;
};
