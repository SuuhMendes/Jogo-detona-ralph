const state={
    view:{
        squares:document.querySelectorAll(".square"),
        ememy: document.querySelector(".enemy"),
        time: document.querySelector("#time"),
        score: document.querySelector("#score"),
        life:document.querySelector("#life")
    }, 
   
    value:{
        
        posição:0,
        result:0,
       currentTime:60, 

    },

    actions :{
        timeId: setInterval(randomInimigo,1000),
        timeLimitId:setInterval(timeLimit,1000),

    },
}

function addListenerHitBox(){
    state.view.squares.forEach((square)=>{
        square.addEventListener("mousedown",()=>{
            
            if(square.id===state.value.posição){
                state.value.result++
                state.view.score.textContent=state.value.result;
                state.value.posição= null;
                playSound("sound");
                
            }
        })
    })

}

function randomInimigo(){
    state.view.squares.forEach((square)=>{
        square.classList.remove("enemy");

    })
let randomNumber=Math.floor(Math.random()*9); 
let randomSquare=state.view.squares[randomNumber];
randomSquare.classList.add("enemy")
state.value.posição=randomSquare.id 
} 


function timeLimit(){
    state.value.currentTime--;
    state.view.time.textContent=state.value.currentTime;
    if(state.value.currentTime<=0){

        clearInterval(state.actions.timeId);
        clearInterval(state.actions.timeLimitId);
       
        ;

    }
}


function playSound(sound){
    let audio= new Audio(`./src/sounds/${sound}.mp3`);
    audio.volume=0.7;
    audio.play();
}
function init(){
   
    addListenerHitBox();

}
init()