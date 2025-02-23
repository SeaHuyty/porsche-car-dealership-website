let slide = document.querySelectorAll("input[type='radio']");
let contaianer = document.getElementById("headContainer");
for (let i=0;i<slide.length;i++) {
    slide[i].addEventListener('change', function(){
        changeColor(i);
    });
}

function changeColor(index){
    let bg = [
        "radial-gradient(circle, rgb(47, 106, 165) 0%, rgb(11, 86, 113) 42%)", // Slide 1
        "radial-gradient(circle, rgb(154, 151, 151) 0%, rgb(139, 139, 139) 42%)", // Slide 2
        "radial-gradient(circle, rgb(141, 165, 173) 0%, rgb(97, 128, 139) 42%)", // Slide 3
        "radial-gradient(circle, rgb(154, 151, 151) 0%, rgb(139, 139, 139) 42%)", // Slide 4
        "radial-gradient(circle, rgb(153, 90, 90) 0%, rgb(163, 2, 2) 42%)", // Slide 5
        "radial-gradient(circle, rgb(61, 60, 60) 0%, rgb(0, 0, 0) 42%)" // Slide 6

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