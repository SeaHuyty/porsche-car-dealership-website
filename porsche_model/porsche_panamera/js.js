let slide = document.querySelectorAll("input[type='radio']");
let contaianer = document.getElementById("headContainer");
for (let i=0;i<slide.length;i++) {
    slide[i].addEventListener('change', function(){
        changeColor(i);
    });
}

function changeColor(index){
    let bg = [
        "radial-gradient(circle, rgb(61, 60, 60) 0%, rgb(41, 40, 40) 42%)", // Slide 1
        "radial-gradient(circle, rgb(152, 151, 151) 0%, rgb(135, 134, 134) 42%)", // Slide 2
        "radial-gradient(circle, rgb(173, 66, 66) 0%, rgb(164, 31, 31) 42%)", // Slide 3
        "radial-gradient(circle, rgb(160, 120, 46) 0%, rgb(147, 85, 22) 42%)", // Slide 4
        "radial-gradient(circle, rgb(147, 147, 147) 0%, rgb(120, 119, 119) 42%)", // Slide 5
        "radial-gradient(circle, rgb(61, 60, 60) 0%, rgb(41, 40, 40) 42%)",
        "radial-gradient(circle, rgb(147, 147, 147) 0%, rgb(120, 119, 119) 42%)" // Slide 6

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