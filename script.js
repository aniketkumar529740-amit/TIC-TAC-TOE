let box = document.querySelectorAll(".box");
let mainbox = document.querySelector("#main-box");
let resetbtn = document.querySelector(".resetbtn")
let winner = document.querySelector(".hidden-msg")
let newgame = document.querySelector(".new-game-btn")

trunx = true;

const winpatterns =  [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];

let start = () => {
    box.forEach(boxes => {
        boxes.addEventListener("click", () => {
            if(trunx == true) {
            boxes.innerText = "X"
            boxes.style.backgroundColor = "#00d2fc"
             boxes.style.color = "#ffffff"
             boxes.disabled = true;
            trunx = false ;
             
        } else {
            boxes.innerText = "O";
            boxes.style.backgroundColor = "#ff2e93"
            boxes.style.color = "#ffffff"
              boxes.disabled = true;
            trunx = true;
          
        }
        checkwinner();
        });
    });
};

start();

let clearbtn = () => {
    box.forEach(boxes => {
    boxes.innerText = "";
    boxes.style.backgroundColor = "";
    boxes.style.color = "";
    boxes.disabled = false;
   
    });
     
    truex = true;
    winner.innerText = ""
};



let checkwinner = () => {
    for(pattern of winpatterns) {
        p0 = box[pattern[0]].innerText;
        p1 = box[pattern[1]].innerText;
        p2 = box[pattern[2]].innerText;

          if(p0 != "" && p0 === p1 && p1 === p2){
            if(p0 === p1 && p1 === p2){
            winner.classList.add("msg")
            winner.innerText = `🏆 Player ${p0} Wins!`
        var winman = console.log("winner",p0) 
           box.forEach(boxes => boxes.disabled = true);
             return p0;
           

             }

            }

        }
    };


let nextgame = () => {
    
    if(  winner.innerText === `🏆 Player ${p0} Wins!`){
    box.forEach(boxes => {
    boxes.innerText = "";
    boxes.style.backgroundColor = "";
    boxes.style.color = "";
    boxes.disabled = false;
   
    });
    
    winner.innerText = ""
    }

}



resetbtn.addEventListener("click",clearbtn)
newgame.addEventListener("click",nextgame)
