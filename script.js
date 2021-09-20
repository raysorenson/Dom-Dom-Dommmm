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

// make box id appear with mouse hover    

    divvy.addEventListener('mouseenter', function () {
        let h2 = document.createElement('h2');
        h2.id = counter;
        let h2Text = document.createTextNode(divvy.id);
        h2.appendChild(h2Text);
        divvy.appendChild(h2);
      })

      divvy.addEventListener('mouseleave', function () {
        var elem = document.getElementById(counter);
        elem.parentNode.removeChild(elem);
      })