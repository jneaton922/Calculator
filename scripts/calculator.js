function add(a,b){
    return a + b;
}

function subtract(a,b){
    return a-b;
}
function multiply(a,b){
    return a*b;
}
function divide(a,b){
    return a/b;
}
function operate(f,a,b){
    return f(a,b);
}


let display=document.querySelector('#display');
let newdisplay=true;



document.querySelectorAll(".number").forEach(button => {
    button.addEventListener('click', function(e){
        console.log("clicked a number button!")
        console.log(e.target.value);
        if (newdisplay) {
            display.innerHTML = e.target.value;
            newdisplay=false;
        }
        else display.innerHTML = display.innerHTML + e.target.value;
    });
});

let clear = document.querySelector("#clear");
clear.addEventListener('click',function(){
    console.log("in Clear");
    newdisplay=true;
    display.innerHTML = 0;
})

document.querySelectorAll(".operation").forEach(button => {
    button.addEventListener('click', function(e){
        console.log("clicked an operation button!")
        console.log(e.target.value);
        newdisplay = true;
        let newOp = display.innerHTML;
        display.innerHTML = 0;
    });
});

