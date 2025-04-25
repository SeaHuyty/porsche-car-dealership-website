let slide = document.querySelectorAll("input[type='radio']");
let contaianer = document.getElementById("headContainer");
for (let i=0;i<slide.length;i++) {
    slide[i].addEventListener('change', function(){
        changeColor(i);
    });
}

function changeColor(index){
    let bg = [
        "radial-gradient(circle, rgb(104, 96, 96) 0%, rgb(75, 68, 68) 42%)", // Slide 1
        "radial-gradient(circle, rgb(72, 126, 142) 0%, rgb(52, 112, 129) 42%)", // Slide 2
        "radial-gradient(circle, rgb(105, 100, 178) 0%, rgb(70, 34, 148) 42%)", // Slide 3
        "radial-gradient(circle, rgb(151, 51, 51) 0%, rgb(164, 16, 16) 42%)", // Slide 4
        "radial-gradient(circle, rgb(61, 60, 60) 0%, rgb(0, 0, 0) 42%)", // Slide 5
        "radial-gradient(circle, rgb(85, 169, 169) 0%, rgb(25, 133, 141) 42%)",
        "radial-gradient(circle, rgb(156, 175, 186) 0%, rgb(89, 116, 135) 42%)" // Slide 6

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