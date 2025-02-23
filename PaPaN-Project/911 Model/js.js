let slide = document.querySelectorAll("input[type='radio']");
let contaianer = document.getElementById("headContainer");
for (let i=0;i<slide.length;i++) {
    slide[i].addEventListener('change', function(){
        changeColor(i);
    });
}

function changeColor(index){
    let bg = [
        "radial-gradient(circle, rgb(79, 172, 184) 0%, rgb(47, 114, 140) 42%)", // Slide 1
        "radial-gradient(circle, rgb(167, 142, 125) 0%, rgb(209, 81, 1) 42%)", // Slide 2
        "radial-gradient(circle, rgb(191, 191, 191) 0%, rgb(141, 143, 144) 42%)", // Slide 3
        "radial-gradient(circle, rgb(57, 120, 51) 0%, rgb(4, 81, 7) 42%)", // Slide 4
        "radial-gradient(circle, rgb(127, 128, 127) 0%, rgb(108, 108, 108) 42%)", // Slide 5
        "radial-gradient(circle, rgb(186, 56, 56) 0%, rgb(146, 10, 10) 42%)" // Slide 6

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