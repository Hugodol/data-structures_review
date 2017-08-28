var Set = function() {
  this.storage = [];
};

Set.prototype.add = function(item) {
  this.storage.push(item);
};

Set.prototype.contains = function(item) {
  return this.storage.includes(item);
};

Set.prototype.remove = function(item) {
  const index = this.storage.indexOf(item);
  this.storage.splice(index, 1);
};
