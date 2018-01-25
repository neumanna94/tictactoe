function Player(playerNameIn){
  this.name = playerNameIn;
  this.wins = 0;
  this.losses = 0;
  this.draws = 0;
}
function Board(){
  this.board = createMatrix(3,3);
}
Board.prototype.move=function(row, column, selector){
  if(this.board[row][column] == null){
    if(selector == 0){
      this.board[row][column] = "O";
    } else if(selector == 1){
      this.board[row][column] = "X";
    } else if(selector == 2){
      this.board[row][column] = null;
    } else {
    return "position already taken.";
    }
  }
}
Board.prototype.checkForWin=function(){
  var lDiagonal = true;
  var rDiagonal = true;
  var rowState = true;
  var colState = true;
  for(var i = 0; i < 3; i ++){
    //Check Diagonals
    if(this.board[0][0] != this.board[i][i] || this.board[0][0] != null){
      lDiagonal = false;
    }
    if(this.board[2][0] != this.board[2-i][i] || this.board[2][0]!=null){
      rDiagonal= false;
    }
    for(var j = 1; j < 3; j ++){
      if(lDiagonal || rDiagonal){
        return true;
      }
      //Check Rows
      if(this.board[i][0] != this.board[i][j] || this.board[i][0] != null){
        rowState = false;
      //Check Columns
      }
      if(this.board[0][i] != this.board[j][i] || this.board[0][i] !=null){
        colState = false;
      }
    }
    if(colState || rowState){
      return true;
    }
  }
  return false;
}
function createMatrix(rows,columns){
  var outputMatrix = [];
  for(var i = 0; i < rows; i ++){
    outputMatrix.push([]);
    for(var j = 0; j < columns; j ++){
      outputMatrix[i][j] = null;
    }
  }
  return outputMatrix;
}
function checkRowForWin(inputArray){
  for(var i=1; i < input.length; i++){
    if(inputArray[i] !== inputArray[0] && inputArray[0] !== null){
      return false;
    }
  }
  return inputArray[0];
}
function updateBoard(row, column , selector){

};

function updateTurn(){
  if(currentTurn%2 == 0){
    currenTurn ++;
    return "O";
  } else if(currentTurn%2 != 0){
    currenTurn ++;
    return "X";
  }
}
function printBoard(){
  for (var i = 0; i < 3; i ++){
    for (var j = 0; j < 3; j ++){
      displayedBoard[i][j];
    }
  }

}


var displayedBoard = new Board();
var currentTurn = 0; //O is Even turns, X is Odd Turns

  var boardOne = new Board();
  boardOne.move(0,0,0);
  boardOne.move(0,1,0);
  boardOne.move(0,2,0);

  var boardTwo = new Board();
  boardTwo.move(0,0,0);
  boardTwo.move(1,1,0);
  boardTwo.move(2,2,0);

  var boardThree = new Board();
  boardThree.move(0,0,0);
  boardThree.move(1,0,0);
  boardThree.move(2,0,0);

  var boardFour = new Board();
  boardFour.move(0,0,1);
  boardFour.move(1,0,1);
  boardFour.move(2,0,0);
  var boardFive = new Board();
  boardFive.move(0,0,0);
  boardFive.move(1,0,0);
  boardFive.move(2,0,1);
  var boardSix = new Board();
  boardSix.move(0,0,1);
  boardSix.move(1,0,1);
  boardSix.move(2,0,1);
  var boardSeven = new Board();
  boardSeven.move(2,0,0);
  boardSeven.move(1,1,0);
  boardSeven.move(0,2,1);
  var boardEight = new Board();
  boardEight.move(2,0,1);
  boardEight.move(1,1,0);
  boardEight.move(0,2,1);



  $(document).ready(function(){
    $(".col-md-4").click(function(){
      $(this).text(this);
    });

    $( ".col-md-4" ).each(function( index ) {
      var row = 0;
      var column = 0;
      var j = 0;

      for(var i = 0; i < index; i ++){
        var selector = $( this ).text();
        if(selector == "O"){
          selector = 0;
        } else if(selector == "X"){
          selector = 1;
        }
        displayedBoard.move(j,i%3,selector);
        j = Math.floor(i/3);
      }
    });
    $(".restart").click(function(){
      displayedBoard = new Board();
    })
});
