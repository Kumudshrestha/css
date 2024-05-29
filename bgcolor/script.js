const bg = document.getElementById("background");

function changecolor(monkeyTheColorCatcher){
    bg.style.backgroundColor = monkeyTheColorCatcher;
}

function randomColorGenerator(){
    const red = Math.round(Math.random()*255)
    const green = Math.round(Math.random()*255)
    const blue = Math.round(Math.random()*255)
    bg.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`
}
