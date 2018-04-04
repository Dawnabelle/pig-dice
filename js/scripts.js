// back end logic
var player1Score = 0;
var player2Score = 0;
var player1Overall = [];
var player2Overall = [];
var player1Total = 0;
var player2Total = 0;

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

function totalScore1(array) {
  player1Total = 0;
array.forEach(function (value){
  player1Total += value;
  });
}

function totalScore2(array) {
  player2Total = 0;
array.forEach(function (value){
  player2Total += value;
  });
}
// ui logic
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
    totalScore1(player1Overall);
    $("#player-1").hide();
    $("#player-2").show();
    $(".p1Game").text(player1Total);
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
    totalScore2(player2Overall);
    $("#player-2").hide();
    $("#player-1").show();
    $(".p2Game").text(player2Total);
  })
});
