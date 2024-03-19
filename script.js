


function rollDice(){

    var imgList = ["./images/dice1.png", "./images/dice2.png", "./images/dice3.png", "./images/dice4.png", "./images/dice5.png", "./images/dice6.png"]
    var playerOne = Math.floor(Math.random()*imgList.length);
    var playerTwo = Math.floor(Math.random()*imgList.length);

    if (playerOne === playerTwo){
        document.querySelector("h1").textContent = "Draw!";
    }
    else if (playerOne > playerTwo){
        document.querySelector("h1").textContent = "Player 1 wins!";
    }
    else if (playerTwo > playerOne){
        document.querySelector("h1").textContent = "Player 2 wins!";    
    }

    document.querySelector("#img-player-1").setAttribute("src", imgList[playerOne]);
    document.querySelector("#img-player-2").setAttribute("src", imgList[playerTwo]);

}