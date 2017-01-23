$(document).ready(function(){
  animateDivPurple();
  animateDivRed();
});

function makeNewPositionPurple(){
  // Get viewport dimensions (remove the dimension of the div)
  var hp = $(window).height() - 120;
  var wp = $(window).width() - 120;
  var nhp = Math.floor(Math.random() * hp);
  var nwp = Math.floor(Math.random() * wp);
  return [nhp,nwp];
}

function animateDivPurple(){
  var newqp = makeNewPositionPurple();
  var oldqp = $('.robot-purple').offset();
  var speedp = calcSpeedPurple([oldqp.top, oldqp.left], newqp);
  $('.robot-purple').animate({ top: newqp[0], left: newqp[1] }, speedp, function(){
    animateDivPurple();
  });
};

function calcSpeedPurple(prev, next) {
  var x = Math.abs(prev[1] - next[1]);
  var y = Math.abs(prev[0] - next[0]);
  var greatest = x > y ? x : y;
  var speedModifier = 0.1;
  var speed = Math.ceil(greatest/speedModifier);
  return speed;
}


function makeNewPositionRed(){
  // Get viewport dimensions (remove the dimension of the div)
  var hr = $(window).height() - 140;
  var wr = $(window).width() - 140;
  var nhr = Math.floor(Math.random() * hr);
  var nwr = Math.floor(Math.random() * wr);
  return [nhr,nwr];
}

function animateDivRed(){
  var newqr = makeNewPositionRed();
  var oldqr = $('.robot-red').offset();
  var speedr = calcSpeedRed([oldqr.top, oldqr.left], newqr);
  $('.robot-red').animate({ top: newqr[0], left: newqr[1] }, speedr, function(){
    animateDivRed();
  });
};

function calcSpeedRed(prev, next) {
  var x = Math.abs(prev[1] - next[1]);
  var y = Math.abs(prev[0] - next[0]);
  var greatest = x > y ? x : y;
  var speedModifier = 0.1;
  var speed = Math.ceil(greatest/speedModifier);
  return speed;
}
