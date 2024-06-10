const upload = document.getElementById('upload')
const form = document.getElementById('form')
const buttons = document.getElementById('buttons')
const picture = document.getElementById('picture')
let separators = document.querySelectorAll('#separator')
var time = document.getElementById('timeclock');
let gg = document.querySelectorAll('#timeclock')
    setTimeout(()=> {
        for(let i = 0; i < separators.length; i++){
            separators[i].textContent = ':';
    }
    },1000)
setInterval(function(){
    let hours = new Date().getHours()
    if(hours < 10){
        hours = '0' + hours;
    }
    document.getElementById('hours').innerHTML = hours;
    let minutes = new Date().getMinutes()
    if(minutes < 10){
        minutes = '0' + minutes;
    }
    document.getElementById('minutes').innerHTML = minutes;
    let seconds = new Date().getSeconds()
    if(seconds < 10){
        seconds = '0' + seconds;
    }
    document.getElementById('seconds').innerHTML = seconds;
}, 1000)
upload.onclick = function(){
    let checkboxes = document.querySelectorAll('.checkbox')
    let checked = Array.from(checkboxes)
    checked = checked.filter(item => item.checked)
    form.style.display = 'none'
    checked.map(animal => {
        return(buttons.innerHTML += `
            <button id='change' onclick='showImage(${animal.id})'>
                ${animal.getAttribute('data-name')}
            </button>
        `);
    })
    console.log(checked);
}
function showImage(name) {
    picture.innerHTML = `<img src='./images/${name.id}.png' alt='${name.id}'>`
}
const plus = document.getElementById('plus')
const value = document.getElementById('value')
const minus = document.getElementById('minus')
function increment() {
    let result = Number(value.textContent) + 1;
    value.textContent = result;
}
plus.onclick = increment;
function increment1() {
    let result = Number(value.textContent) - 1;
    value.textContent = result;
}
minus.onclick = increment1;
const generator = document.getElementById('generator')
const number = document.getElementById('number')
function random() {
    let result = Math.trunc(Math.random()*100);
    number.textContent = result;
}
generator.onclick = random;
time.onclick = function(){
    time.style.color = "black";
}
time.ondblclick = function(){
    time.style.color = "";
}
