$(document).ready(function() {
  window.dancers = [];

  $('body').on('click', '.addDancerButton', function(event) {
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

  $('body').on('mouseover', '.pikachu', function() {
    $(this).fadeIn('fast').attr('src', './images/raichu.gif').addClass('raichu');
  });

  $('body').on('mouseover', '.charmander', function() {
    $(this).fadeIn('fast').attr('src', './images/charmeleon.gif').addClass('charmeleon');
  });

  $('body').on('mouseover', '.charmeleon', function() {
    $(this).fadeIn('fast').attr('src', './images/charizard.gif').addClass('charizard');
  });

  var findDistance = function(array) {
    if (array.length === 0) {
      return;
    }
    var dancer = array[0];
    for (var i = 1; i < array.length; i++) {
      var a = Math.abs(dancer.left - array[i].left);
      var b = Math.abs(dancer.top - array[i].top);
      var distanceSquared = Math.sqrt(a) + Math.sqrt(b);
      var distance = Math.round(Math.sqrt(distanceSquared));
      if (distance <= 4) {
        if ($(dancer.$node).hasClass('pokeball') && $(array[i].$node).hasClass('pokemonDancer')) {
          $(dancer).fadeIn('fast').attr('src', './images/dwight.gif');
        }
        //have the dancer and its partner do something
        $(dancer.$node).addClass('big');
        $(array[i].$node).addClass('big');
      }
    }
    return findDistance(array.slice(1));
  };

  setInterval(function() {
    findDistance(window.dancers);
  }, 5000);

  $('.lineUpCenterButton').on('click', function() {
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
    // dancer.$node.toggle();
    $(dancer).toggleClass('lineUp');
    dancer.setPosition(sizeTop, sizeLeft);  
  };
});

