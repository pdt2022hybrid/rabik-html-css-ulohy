var playerScore = 0;
var computerScore = 0;


function begin() {
var playerChoice = prompt("   hráč: " + playerScore + "                                                                            počítač: " + computerScore + "\n              vyber si kamen = k, papier = p alebo noznice = n");
var computerChoice = Math.random();

// RNG

    if (computerChoice <0.34) {
        computerChoice = "k";
    } else if (computerChoice <=0.67){
        computerChoice = "p";
    } else computerChoice = "n";

// comparing

    var  compare = function (player,computer){
        if(player === computer){
            alert ("remíza");
            computerScore == computerScore ++;
            playerScore == playerScore ++;
            return 0;
        }
        if(player === "k"){
            if(computer === "n"){
                alert ("kameň vyhráva")
                playerScore == playerScore ++;
            }
            else{
                alert ("papier vyhráva")
                computerScore == computerScore ++;
            }
        }
        if(player === "p"){
            if(computer === "k"){
                alert ("papier vyhráva")
                playerScore == playerScore ++;
            }
            else{
                alert ("noznice vyhrávajú")
                computerScore == computerScore ++;
            }
        }
        if(player === "n"){
            if(computer === "k"){
                alert ("kameň vyhráva")
                playerScore == playerScore ++;
            }
            else{
                alert ("nožnice vyhrávajú")
                computerScore == computerScore ++;
            }
        }
    };
    compare(playerChoice,computerChoice)
    var info = [playerChoice, playerScore, computerChoice, computerScore];
    console.log(info);
        















}