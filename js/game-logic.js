// All code should be written in this file.

//global move variables
var playerOneMoveOneType;
var playerOneMoveOneValue;
var playerTwoMoveOneType;
var playerTwoMoveOneValue;
var playerOneMoveTwoType;
var playerOneMoveTwoValue;
var playerTwoMoveTwoType;
var playerTwoMoveTwoValue;
var playerOneMoveThreeType;
var playerOneMoveThreeValue;
var playerTwoMoveThreeType;
var playerTwoMoveThreeValue;



function setPlayerMoves(player, moveOneType, moveOneValue, moveTwoType, moveTwoValue, moveThreeType, moveThreeValue) {
    if (!moveOneType || !moveOneValue || !moveTwoType || !moveTwoValue || !moveThreeType || !moveThreeValue) {
        return;
    }
    if (moveOneValue < 1 || moveTwoValue <1 || moveThreeValue <1) {
        return;
    }
    if (moveOneValue > 99 || moveTwoValue >99 || moveThreeValue >99) {
        return;
    }
    if(moveOneType === 'rock' || moveOneType === 'Scissors' || moveOneType === 'Paper') {
        return moveOneType; }
    else { return;
    }
    if(moveTwoType === 'rock' || moveTwoType === 'Scissors' || moveTwoType === 'Paper') {
        return moveTwoType; }
    else { return;
    }
    if(moveThreeType === 'rock' || moveThreeType === 'Scissors' || moveThreeType === 'Paper') {
        return moveThreeType; }
    else { return;
    }
    
    if(player === 'Player One') {
        playerOneMoveOneType = moveOneType;
        playerOneMoveOneValue = moveOneValue;
        playerOneMoveTwoType = moveTwoType;
        playerOneMoveTwoValue = moveTwoValue;
        playerOneMoveThreeType = moveThreeType;
        playerOneMoveThreeValue = moveThreeValue;
    } else {
        playerTwoMoveOneType = moveOneType;
        playerTwoMoveOneValue = moveOneValue;
        playerTwoMoveTwoType = moveTwoType;
        playerTwoMoveTwoValue = moveTwoValue;
        playerTwoMoveThreeType = moveThreeType;
        playerTwoMoveThreeValue = moveThreeValue;
    }
}
//check to see who won each round
function getRoundWinner (roundNumber) {
    if (roundNumber === 1) { // first check to see what round it is
        if (playerOneMoveOneType === playerTwoMoveOneType) { // then check to see if the types are the same. if they are, compare the values
            if (playerOneMoveOneValue > playerTwoMoveOneValue) {
                return 'Player One';} else if (playerOneMoveOneValue < playerTwoMoveOneValue) {
                    return 'Player Two'; } else {
                        return 'Tie' }
        }
         if (playerOneMoveOneType === 'Rock') {
            if (playerTwoMoveOneType === 'Scissors') {
                return 'Player One';} else if (playerTwoMoveOneType === 'Paper') {
                    return 'Player Two';
                }
            }
         if (playerOneMoveOneType === 'Paper') {
            if (playerTwoMoveOneType === 'Rock') {
                return 'Player One';} else if (playerTwoMoveOneType === 'Scissors') {
                    return 'Player Two';
                }
            }
         if (playerOneMoveOneType === 'Scissors') {
            if (playerTwoMoveOneType === 'Rock') {
                return 'Player Two';} 
             else if (playerTwoMoveOneType === 'Paper') {
                    return 'Player One';
                }
            }
    } // repeat for each round
     if (roundNumber === 2) {
        if (playerOneMoveTwoType === playerTwoMoveTwoType) {
            if (playerOneMoveTwoValue > playerTwoMoveTwoValue) {
                return 'Player One';} else if (playerOneMoveTwoValue < playerTwoMoveTwoValue) {
                    return 'Player Two';} else {
                        return 'Tie'
                }
        }
         if (playerOneMoveTwoType === 'Rock') {
            if (playerTwoMoveTwoType === 'Scissors') {
                return 'Player One'} else if (playerTwoMoveTwoType === 'Paper') {
                    return 'Player Two';
                }
            }
         if (playerOneMoveTwoType === 'Paper') {
            if (playerTwoMoveTwoType === 'Rock') {
                return 'Player One'} else if (playerTwoMoveTwoType === 'Scissors') {
                    return 'Player Two';
                }
            }
         if (playerOneMoveTwoType === 'Scissors') {
            if (playerTwoMoveTwoType === 'Rock') {
                return 'Player Two'} else if (playerTwoMoveTwoType === 'Paper') {
                    return 'Player One';
                }
            }
     }
 if (roundNumber === 3) {
        if (playerOneMoveThreeType === playerTwoMoveThreeType) {
            if (playerOneMoveThreeValue > playerTwoMoveThreeValue) {
                return 'Player One';} else if (playerOneMoveThreeValue < playerTwoMoveThreeValue) {
                    return 'Player Two';} else { return 'Tie'
                }
            }
         if (playerOneMoveThreeType === 'Rock') {
            if (playerTwoMoveThreeType === 'Scissors') {
                return 'Player One';} else if (playerTwoMoveThreeType === 'Paper') {
                    return 'Player Two';
                }
            }
         if (playerOneMoveThreeType === 'Paper') {
            if (playerTwoMoveThreeType === 'Rock') {
                return 'Player One';} else if (playerTwoMoveThreeType === 'Scissors') {
                    return 'Player Two';
                }
            }
         if (playerOneMoveThreeType === 'Scissors') {
            if (playerTwoMoveThreeType === 'Rock') {
                return 'Player Two';} else if (playerTwoMoveThreeType === 'Paper') {
                    return 'Player One';
                }
            }
        }
      
    }

function getGameWinner () {
    var playerOneScore = 0;
    var playerTwoScore = 0;
    var tieScore = 0;
    if (getRoundWinner(1) === 'Player One') {
        playerOneScore += 1;
    } else if (getRoundWinner(1) === 'Player Two') {
        playerTwoScore += 1;
    } else { tieScore += 1; }
    if (getRoundWinner(2) === 'Player One') {
        playerOneScore += 1;} else if (getRoundWinner(2) === 'Player Two') {
            playerTwoScore += 1;} else { tieScore += 1; }
        
     if (getRoundWinner(3) ==='Player One') {
        playerOneScore += 1;} else if (getRoundWinner === 'Player Two') {
            playerTwoScore += 1} else { tieScore += 1; }
        
     if (playerOneScore === playerTwoScore && playerOneScore === tieScore) {
        return 'Tie';
    } if (playerOneScore > playerTwoScore && playerOneScore > tieScore) {
        return 'Player One';
    } if (playerTwoScore > playerOneScore && playerTwoScore > tieScore) {
        return 'Player Two';
    }
    
}












