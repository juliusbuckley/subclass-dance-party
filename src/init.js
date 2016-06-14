$(document).ready(function() {
  window.dancers = [];

  $('.addDancerButton').on('click', function(event) {
    /* This function sets up the click handlers for the create-dancer
     * buttons on dancefloor.html. You should only need to make one small change to it.
     * As long as the "data-dancer-maker-function-name" attribute of a
     * class="addDancerButton" DOM node matches one of the names of the
     * maker functions available in the global scope, clicking that node
     * will call the function to make the dancer.
     */

    /* dancerMakerFunctionName is a string which must match
     * one of the dancer maker functions available in global scope.
     * A new object of the given type will be created and added
     * to the stage.
     */
    var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');

    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];

    // make a dancer with a random position

    var dancer = new dancerMakerFunction(
      $('body').height() * Math.random(),
      $('body').width() * Math.random(),
      Math.random() * 1000
    );
    window.dancers.push(dancer);
    $('body').append(dancer.$node);
  });

  var findDistance = function(array) {
    if (array.length === 0) {
      return;
    }
    for (var i = 0; i < array.length; i++) {
      var dancer = window.dancers;
      var top = dancer.top;
      var left = dancer.left;
    }
    return findDistance(array.slice(1));
  };

  setInterval(function() {
    findDistance(window.dancers);
  }, 2000);

  $('.lineUpCenterButton').on('click', function() {
    console.log('I was clicked');
    var sizeTop = 0;
    window.dancers.forEach(function(dancer) {
      lineUp(dancer, sizeTop, Math.floor(window.innerWidth / 2));
    });
  });

  $('.lineUpRightButton').on('click', function() {
    window.dancers.forEach(function(dancer) {
      lineUp(dancer, 0, window.innerWidth - 250);
    });
  });

  $('.lineUpLeftButton').on('click', function() {
    window.dancers.forEach(function(dancer) {
      lineUp(dancer, 0, 0);
    });
  });

  var lineUp = function(dancer, sizeTop, sizeLeft) {
    console.log('inside lineup');
    // dancer.$node.toggle();
    $(dancer).toggleClass('lineUp');
    console.log('dancer.toggling is', dancer);
    dancer.setPosition(sizeTop, sizeLeft);  
  };
});

