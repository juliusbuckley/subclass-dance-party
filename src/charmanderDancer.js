var makeCharmanderDancer = function(top, left, timeBetweenSteps) {
  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function
  this.top = top;
  this.left = left;
  this.timeBetweenSteps = timeBetweenSteps;
  this.$node = $('<img class="charmander pokemonDancer lineUp" src="./images/charmander.gif"></img>');
  makeDancer.call(this, top, left, timeBetweenSteps, this.$node);
};

makeCharmanderDancer.prototype = Object.create(makeDancer.prototype);
makeCharmanderDancer.prototype.constructor = makeCharmanderDancer;