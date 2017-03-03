//-----global variables-----
var rollScore = 0;
var turnScore = 0;
var totalScore = 0;

//-----business logic-----

function Player (name, rollScore, turnScore, totalScore) {
  this.name = name;
  this.rollScore = rollScore;
  this.turnScore = turnScore;
  this.totalScore = totalScore;
}

Player.prototype.roll = function() {
   rollScore = Math.floor(Math.random() * (6 - 1 + 1) + 1);
   turnScore = turnScore + rollScore;
   console.log(turnScore);
   return rollScore;
};

Player.prototype.addScore = function() {
  totalScore = totalScore + turnScore;
  if (totalScore >= 100) {
    console.log("Game Over");
  }
  return totalScore;
};

function resetFunction() {
  location.reload();
}

var playerOne = new Player("inPuttedName", 0 , 0, 0);
var playerTwo = new Player("Hal", 0, 0, 0);

function rollsAdded(){
    turnScore = turnScore + rollScore;
    console.log(turnScore);
}
//
// function gameOver(){
//   if (turnScore >= 10) {
//     console.log("Game Over");
//   }
// }


// //variables
// var turnScore = 0;
// var rollScore = 0;
// var players = [];
// var activePlayer;
//
// //BUSINESS LOGIC
// function Player(name){ //player constructor
//   this.name = name;
//   this.totalScore = 0;
//   return name;
// };
//
// // Player.prototype.scoreKeeper = function() {
// //   return this.totalScore + turnScore;
// // }
//
// function roll(){
//   rollScore = Math.floor(Math.random() * 5 + 1);
//   return rollScore;
// };
//
// function hold(){
//   Player.prototype.scoreKeeper = function() {
//     return this.totalScore + turnScore;
//   }
// }
//
// // function swap(){
// //   if  (activePlayer = Players[0]) {
// //       activePlayer = Player[1]
// //     } else  (activePlayer = Players[1]) {
// //       activePlayer = Player[0]
// //     }
// //     // playerUp = switch(){
// //     //   return playerUp;
// //   };
//
// //USER INTERFACE LOGIC
// $(document).ready(function(){
//
// //variables
// var goal = 100;
// var currentPlayer;
// var currentScore = 0;
// var rollValue;
//
// //while activePlayer.totalScore < 100 {
//   $("#roll").click(function() {
//     rollScore = roll();
//     turnScore = turnScore + rollScore;
//     $(".rollScore").text(rollScore);
//     $(".turnScore").text(turnScore);
//     });
//
//   $("#hold").click(function(){
//     changePlayers = hold();
//     playerUp = swap();
//     $(".playerUpName").text("");
//   });
// //}
//
//   $("form#playGame").submit(function(event) {
//     event.preventDefault();
//     var inputtedName = $("input#playerOne").val();
//     var newPlayer = new Player(inputtedName); {
//     $(".playerOneName").text(inputtedName);
//     players.push(newPlayer);
//     }
//     var newPlayer = new Player ("Computer"); {
//     $(".playerTwoName").text("Computer");
//     players.push(newPlayer);
//     }
//   });
// });
