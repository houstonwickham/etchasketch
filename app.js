// create box of divs
let size = 256;
let div;
const container = document.querySelector(".div-container");
function resize(size) {
    for(i = 0; i < size; i++) {
        div = document.createElement('div');
        div.classList.add('box');
        container.appendChild(div);
        container.style.gridTemplateRows = "repeat(" + Math.sqrt(size) + ", 1fr)";
        container.style.gridTemplateColumns = "repeat(" + Math.sqrt(size) + ", 1fr)";
    }
    let allDivs = document.querySelectorAll(".box");
    // add color on hover
    for (i = 0; i < allDivs.length; i++) {
        allDivs[i].addEventListener('mouseover', (event)=>{
            event.target.style.backgroundColor = "#000000";
        })
    }
}
resize(size)



// add resize button functionality
const change = document.querySelector("#change");
change.addEventListener('click', ()=>{
    let answer = prompt('How wide should the new area be?')
    if (answer > 50) {
        alert('Too large. Try again.');
        return;
    }
    let newSize = answer * answer;
    container.innerHTML = ''
    resize(newSize);

})


//need to get hover working on resize
//need to get resize working with height width