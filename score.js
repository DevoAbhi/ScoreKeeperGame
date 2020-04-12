var p1score= document.querySelector('#p1');
var p2score= document.querySelector('#p2');
var p1display= document.querySelector('#p1display');
var p2display= document.querySelector('#p2display');
var resetButton=document.querySelector('#reset');
var maxround=document.querySelector('h3 span');
var numInput=document.querySelector("input");
var gameOver=false;
var winningPoint=0;
var p1points=0;
var p2points=0;


p1score.addEventListener("click",function(){
    if(!gameOver)
    {
       
        p1points++;
        if(p1points===winningPoint){
           p1display.classList.add("winner");
           
            
            gameOver=true;

        }
        p1display.textContent=p1points;
    }    
});
p2score.addEventListener("click",function(){
    if(!gameOver)
    {
        p2points++;
        if(p2points===winningPoint){
           p2display.classList.add("winner");
           
            
            gameOver=true;

        }
        p2display.textContent=p2points;
    }    
});
resetButton.addEventListener("click", function(){
        reset();
});
function reset(){
        p1points=0;
        p2points=0;
        p1display.textContent=0;
        p2display.textContent=0;
        p1display.classList.remove("winner");
        p2display.classList.remove("winner");
        
        gameOver=false;

}
numInput.addEventListener("change",function(){
        maxround.textContent=(numInput.value);
        winningPoint=Number(numInput.value);
        reset();
});