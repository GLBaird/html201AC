// grab sprites from page
var guybrush  = $(".guybrush");
var container = $("#container");
var guybrushPosition = 550;
var containerPosition = 0;
var guybrushTimer = null;

// keyboard handlers
function keydown(event) {
  if (event.which == 37 && guybrushTimer == null) {
    // left arrow
    event.preventDefault();
    moveLeft();
  } else if (event.which == 39 && guybrushTimer == null) {
    // right arrow
    event.preventDefault();
    moveRight();
  }
}

function keyup(event) {
  if (event.which == 37) {
    // left arrow
    event.preventDefault();
    stopLeft();
  } else if (event.which == 39) {
    // right arrow
    event.preventDefault();
    stopRight();
  }
}

// add event listeners
$("body")
  .keydown(keydown)
  .keyup(keyup);


// animation handling
function moveLeft() {
  // add timer
  guybrush
    .removeClass('left')
    .removeClass('right')
    .addClass('walk-left');

  guybrushTimer = window.setInterval(function(){
    guybrushPosition -= 10;
    containerPosition += 10;
    container.css("left", containerPosition+"px");
    guybrush.css("left", guybrushPosition+"px");

  }, 100);
}

function moveRight() {
  guybrush
    .removeClass('left')
    .removeClass('right')
    .addClass('walk-right');

  guybrushTimer = window.setInterval(function(){
    guybrushPosition += 10;
    containerPosition -= 10;
    container.css("left", containerPosition+"px");
    guybrush.css("left", guybrushPosition+"px");
  }, 100);
}

function stopLeft() {
  guybrush
    .removeClass('walk-left')
    .addClass('left');
  window.clearInterval(guybrushTimer);
  guybrushTimer = null;
}

function stopRight() {
  guybrush
    .removeClass('walk-right')
    .addClass('right');
    window.clearInterval(guybrushTimer);
    guybrushTimer = null;
}
