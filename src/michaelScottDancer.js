var makeMichaelDancer = function(top, left, timeBetweenSteps) {
  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function
  this.top = top;
  this.left = left;
  this.timeBetweenSteps = timeBetweenSteps;
  makeBlinkyDancer.call(this, top, left, timeBetweenSteps);
};

makeMichaelDancer.prototype = Object.create(makeBlinkyDancer.prototype);
makeMichaelDancer.prototype.constructor = makeMichaelDancer;