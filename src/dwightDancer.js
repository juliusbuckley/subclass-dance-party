var makeDwightDancer = function(top, left, timeBetweenSteps) {
  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function
  this.top = top;
  this.left = left;
  this.timeBetweenSteps = timeBetweenSteps;
  this.$node = $('<img class="dwight pokemonDancer lineUp" src="./images/pikachu.gif"></img>');
  makeDancer.call(this, top, left, timeBetweenSteps, this.$node);
};

makeDwightDancer.prototype = Object.create(makeDancer.prototype);
makeDwightDancer.prototype.constructor = makeDwightDancer;

/*
makeDwightDancer.prototype.step = function() {
    // call the old version of step at the beginning of any call to this new version of step
  makeDancer.prototype.step.call(this);
  // this.oldStep();
    // toggle() is a jQuery method to show/hide the <span> tag.
    // See http://api.jquery.com/category/effects/ for this and
    // other effects you can use on a jQuery-wrapped html tag.
  this.$node.toggle();
};
*/
