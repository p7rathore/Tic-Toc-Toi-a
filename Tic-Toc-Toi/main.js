



let d1 = document.getElementById("d1");
let d2 = document.getElementById("d2");
let d3 = document.getElementById("d3");
let d4 = document.getElementById("d4");
let d5 = document.getElementById("d5");
let d6 = document.getElementById("d6");
let d7 = document.getElementById("d7");
let d8 = document.getElementById("d8");
let d9 = document.getElementById("d9");
let cart = document.querySelectorAll(".cart");
let reset = document.getElementById("reset");
let gameover = false;
let playerTurn = "X" ;

// function to change the turn
const changeturn = ()=>{
   return playerTurn === "X" ? "0" : "X";
}
// check win 
const checkWin = () =>{
   let boxText = document.getElementsByClassName("boxText");
 let winsdata = [
   [0, 1, 2],
   [3, 4, 5],
   [6, 7, 8],
   [0, 3, 6],
   [1, 4, 7],
   [2, 5, 8],
   [0, 4, 8],
   [2, 4, 6]
 ];

 winsdata.forEach(e=>{
  if ((boxText[e[0]].innerText === boxText[e[1]].innerText)&&(boxText[e[2]].innerText === boxText[e[1]].innerText)&&(boxText[e[0]].innerText !== "")) {
   document.querySelector(".win").innerText = boxText[e[0]].innerText ="won";
    gameover = true;
  }
 });

} 

//game logic
   Array.from(cart).forEach(element => {
      let boxText = element.querySelector(".boxText");
      element.addEventListener('click',()=>{
        if (boxText.innerText === "") {
         boxText.innerText = playerTurn;
         playerTurn = changeturn();
         checkWin();
         if (!gameover) {
            document.querySelector(".win").innerText = "Turn For " + playerTurn;
         }
        
        }
      });
   });

// reset 
reset.addEventListener("click",()=>{
   let boxText = document.getElementsByClassName("boxText");
   Array.from(boxText).forEach(element =>{
      element.innerText="";
   });
      playerTurn = "X";
      gameover = false;
      document.querySelector(".win").innerText = "Turn For " + playerTurn;
});

/* Array.from(cart).forEach(element =>{
      element.innerText="";
   });
      playerTurn = "X";
      gameover = false;
      document.querySelector(".win").innerText = "Turn For " + playerTurn; */