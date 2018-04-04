var player1Score = 0;
var player2Score = 0;

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

$(document).ready(function(){
  $(".p1Roll").click(function(event){
    event.preventDefault();
      roll1();
      $('.p1Score').text(player1Score);

  })
  $(".p1Hold").click(function(event){

  })
  $(".p2Roll").click(function(event){
    event.preventDefault();

  })
})
