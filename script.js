let btn = document.createElement('button');
let btnText = document.createTextNode('Add Square');
btn.appendChild(btnText);
document.body.appendChild(btn);

//make a div

let divvy = document.createElement('div');
divvy.classList.add('container');
document.body.appendChild(divvy);
let counter = 1;

//make the button add a square

btn.addEventListener('click', function () {
    let div = document.createElement('div');
    div.id = counter;
    div.classList.add('square');
    
    divvy.appendChild(div)})