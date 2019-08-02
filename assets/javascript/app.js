
// var game = function(){
//     alert ("Game has Started");
// }

var timer = 30;
var intervalId;




$(document).ready(function(){
    $(".start").on("click",function(){
        $(".container").html(game());
        
        
        
        
    })
})

function game(){

    intervalId = setInterval(decrement, 1000);

function decrement(){
    timer--;
    $("#show-number").html(timer);
    if (timer === 0){
        stop();
        alert ("time up!");
    }
  
    
}
}