

let bodyBg= document.getElementById("dayBody");
let toggleDiv = document.getElementById("toggleDiv");
let circleDay = document.getElementById("circleDay");
let heading = document.getElementById("dayHeading");



let j=0;
toggleDiv.addEventListener("click",function(){
    j++;
    if(j%2===1){
        bodyBg.id = "nightBody";
        circleDay.id = "circleNight";
        heading.id = "nightHeading";
    }
    else{
        bodyBg.id = "dayBody";
        circleDay.id = "circleDay";
        heading.id = "dayHeading";
    }
    
});


