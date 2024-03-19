let  RandomNumber = Math.floor(Math.random()*100) + 1;
let  guesses = document.querySelector(".guesses");
let  lowhi = document .querySelector(".lowhi");
let  guessField = document.querySelector(".guessField");
let guessSubmit = document.querySelector(".guessSubmit")
let lastResult = document.querySelector(".lastResult");

let guesscount =1 ;
let resetButton;


function checkGuess(){
    const userguess = Number(guessField.value);
     if (guesscount === 1){
        guesses.textContent ="previous guesses:";
     }
     guesses.textContent =  `${guesses.textContent} ${userguess}`;


if(userguess === RandomNumber){
    lastResult.textContent="congratuation : you got it!";
    lastResult.classList.add('congradulation');
    
    lowhi.textContent="";
    setGameOver();
}
else if (guesscount === 10){
    lastResult.textContent = "!!!Game ovverrr";
    lowhi.textContent = "";
    setGameOver();
}
else {
    lastResult.textContent = "Wrong!";
    lastResult.style.backgroundColor = "red";
    if (userguess < RandomNumber){
        lowhi.textContent = "last guess was too low!";
    }
    else if( userguess > RandomNumber){
        lowhi.textContent = "last guess was too high!";
    }
}
guesscount++;
guessField.value="";
guessField.focus();
}
guessSubmit.addEventListener("click", checkGuess);

function setGameOver() {
    guessField.disabled = true;
    guessSubmit.disabled = true;
    resetButton = document.createElement("button");
    resetButton.textContent = "Start new game";
    document.body.append(resetButton);
    resetButton.addEventListener("click", resetGame);
  }
  function resetGame() {
    guesscount = 1;
  
    const resetParas = document.querySelectorAll(".resultParas p");
    for (const resetPara of resetParas) {
      resetPara.textContent = "";
    }
  
    resetButton.parentNode.removeChild(resetButton);
  
    guessField.disabled = false;
    guessSubmit.disabled = false;
    guessField.value = "";
    guessField.focus();
  
    lastResult.style.backgroundColor = "white";
  
    randomNumber = Math.floor(Math.random() * 100) + 1;
  }
