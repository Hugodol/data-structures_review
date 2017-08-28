var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    const newTail = Node(value);
    if (list.tail) {
      list.tail.next = newTail;
      list.tail = newTail;
    } else {
      list.head = newTail;
      list.tail = newTail;
    }
  };

  list.removeHead = function() {
    const oldHeadValue = list.head.value;
    if (list.head.next) {
      list.head = list.head.next;
    } else {
      list.head = null;
      list.tail = null;
    }
    return oldHeadValue;
  };

  list.contains = function(target, node = list.head) {
    if (node.value === target) {
      return true;
    } else if (node.next) {
      return list.contains(target, node.next);
    } else {
      return false;
    }
  };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};
