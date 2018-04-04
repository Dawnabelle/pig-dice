var player1Score = 0;
var player2Score = 0;
var player1Overall = [];
var player2Overall = [];

function Player (name, score){
  this.name = name;
  this.score = score;
}

function roll1() {
 var result = Math.floor((Math.random() * 6) + 1);
 if (result === 1){
   player1Score = 0;
 }else {
   player1Score += result;
 }
}

function roll2() {
 var result = Math.floor((Math.random() * 6) + 1);
 if (result === 1){
   player2Score = 0;
 }else {
   player2Score += result;
 }
}

function hold1() {
  player1Overall.push(player1Score);
  player1Score = 0;
}

function hold2() {
  player2Overall.push(player2Score);
    player2Score = 0;
}

$(document).ready(function(){
  $(".p1Roll").click(function(event){
    event.preventDefault();
      roll1();
      if (player1Score === 0){
        $("#player-1").hide();
        $("#player-2").show();
      }
      $('.p1Score').text(player1Score);

  })
  $(".p1Hold").click(function(event){
    event.preventDefault();
    hold1();
    $("#player-1").hide();
    $("#player-2").show();
    console.log(player1Overall);
  })
  $(".p2Roll").click(function(event){
    event.preventDefault();
    roll2();
    if (player2Score === 0){
      $("#player-2").hide();
      $("#player-1").show();
    }
    $('.p2Score').text(player2Score);
  })
  $(".p2Hold").click(function(event){
    event.preventDefault();
    hold2();
    $("#player-2").hide();
    $("#player-1").show();
    console.log(player2Overall);
  })
});
