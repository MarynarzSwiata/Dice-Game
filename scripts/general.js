/* 
* version 1.0
* Copyright (c) 2020 Magnus
* licensed under Open Source.
 * https://github.com/magnuSpain
*/

function makeDice() {
    // Score randomization
    var randomDice = (Math.floor(6 * Math.random()) + 1);
    var randomDice2 = (Math.floor(6 * Math.random()) + 1);

    // Set new proporties on img's
    document.querySelector("#firstScore").setAttribute("src", "media/dice" + randomDice + ".png");   
    document.querySelector("#secondScore").setAttribute("src", "media/dice" + randomDice2 + ".png");

    // Final score and set new proporties on <h1 id="header"></h1>
    if (randomDice === randomDice2) {
        document.querySelector("#header").innerHTML = "🚩 Remis 🚩";
}   else if (randomDice > randomDice2) {
        document.querySelector("#header").innerHTML = "🚩 Wygrał Player One";
}   else {
    document.querySelector("#header").innerHTML = "Wygrał Player Two 🚩";
}
}