let slide = document.querySelectorAll("input[type='radio']");
let contaianer = document.getElementById("headContainer");
for(let i=0;i<slide.length;i++){
    slide[i].addEventListener('change', function(){
        changeColor(i);
    });
}

function changeColor(index){
    let bg = [
        "radial-gradient(circle, rgb(61, 60, 60) 0%, rgb(0, 0, 0) 42%)", // Slide 1
        "radial-gradient(circle, rgb(142, 142, 142) 0%, rgb(101, 101, 100) 42%", // Slide 2
        "radial-gradient(circle, rgb(94, 107, 108) 0%, rgb(60, 82, 84) 42%)", // Slide 3
        "radial-gradient(circle, rgb(221, 165, 188) 0%, rgb(234, 74, 154) 42%)", // Slide 4
        "radial-gradient(circle, rgb(142, 142, 142) 0%, rgb(101, 101, 100) 42%)", // Slide 5
        "radial-gradient(circle, rgb(126, 141, 227) 0%, rgb(2, 48, 173) 42%)" // Slide 6

    ]
    contaianer.style.backgroundImage = bg[index];
}

let audio = document.querySelector('audio');
let play = document.querySelector('#btn');
let wave = document.querySelector('.wave');



play.addEventListener('change',function(){
    if(play.checked){
        audio.pause();
    }
    else{
        audio.play();
    }
})
audio.addEventListener('ended',function(){
    wave.style.display = "none";
    play.checked = true;
})
audio.addEventListener('play',function(){
    wave.style.display = "flex";
})
audio.addEventListener('pause',function(){
    wave.style.display = "none";
})

let backbtns = document.querySelectorAll('.fa-arrow-left'); 
let notdropdowns = document.querySelectorAll('.notdropdown');  

backbtns.forEach(function(backbtn) { 
    backbtn.addEventListener('click' ,function() { 
        notdropdowns.forEach(function(notdropdown) {  
            let focusStuck = document.activeElement;  
            if (focusStuck && notdropdown.contains(focusStuck)) {  
                focusStuck.blur();  
            }
        });
    });
});

let body = document.body;
let check = document.querySelector("input[id='navbar']");

check.addEventListener('change',function(){

    if(check.checked){
        body.style.overflowY = "hidden";
    }
    else{
        body.style.overflowY= "unset";

    }
})