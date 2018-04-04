
var player1 = new Player("Player1", []);
var player2 = new Player("Player2", []);

function Player (name, scorearray){
  this.name = name;
  this.turnscore = 0;
  this.scorearray = scorearray;
  this.totalscore = 0;
}

Player.prototype.roll = function() {
  var result = Math.floor((Math.random() * 6) + 1);
   if (result === 1){
     this.turnscore = 0;
   }else {
     this.turnscore += result;
   }
 }

Player.prototype.serialize = function(number) {
  this.scorearray.push(this.turnscore);
  this.turnscore = 0;
}

Player.prototype.addup = function(array){
  this.totalscore = 0;
  for (var i = 0; i < array.length; i++) {
    this.totalscore += array[i];
  }
}


// ui logic
$(document).ready(function(){
  $(".p1Roll").click(function(event){
    event.preventDefault();

      player1.roll();

      if (player1.turnscore === 0){
        $("#player-1").hide();
        $("#player-2").show();
      }
      $('.p1Score').text(player1.turnscore);
        console.log(player1);
  })
  $(".p1Hold").click(function(event){
    event.preventDefault();
    player1.serialize(player1.turnscore);
    player1.addup(player1.scorearray);
    player1.turnscore = 0;
    $("#player-1").hide();
    $("#player-2").show();
    $(".p1Score").text("0")
    $(".p1Game").text(player1.totalscore);
      console.log(player1);
  })

  $(".p2Roll").click(function(event){
    event.preventDefault();
      player2.roll();
    if (player2.turnscore === 0){
      $("#player-2").hide();
      $("#player-1").show();
    }
    $('.p2Score').text(player2.turnscore);
    console.log(player2);
  })
  $(".p2Hold").click(function(event){
    event.preventDefault();
    player2.serialize(player2.turnscore);
    player2.addup(player2.scorearray);
    $("#player-2").hide();
    $("#player-1").show();
    $(".p2Score").text("0")
    $(".p2Game").text(player2.totalscore);
    console.log(player2);
  })  
});

// back end logic
// var player1Score = 0;
// var player2Score = 0;
// var player1Overall = [];
// var player2Overall = [];
// var player1Total = 0;
// var player2Total = 0;




// function roll1() {
//  var result = Math.floor((Math.random() * 6) + 1);
//  if (result === 1){
//    player1Score = 0;
//  }else {
//    player1Score += result;
//  }
// }
//
// function roll2() {
//  var result = Math.floor((Math.random() * 6) + 1);
//  if (result === 1){
//    player2Score = 0;
//  }else {
//    player2Score += result;
//  }
// }
//
// function hold1() {
//   player1Overall.push(player1Score);
//   player1Score = 0;
// }
//
// function hold2() {
//   player2Overall.push(player2Score);
//     player2Score = 0;
// }
//
// function totalScore1(array) {
//   player1Total = 0;
// array.forEach(function (value){
//   player1Total += value;
//   });
// }
//
// function totalScore2(array) {
//   player2Total = 0;
// array.forEach(function (value){
//   player2Total += value;
//   });
// }
