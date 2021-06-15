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
    switch (f){
        case "add":
            console.log('adding in operate');
            return add(a,b);
        case "subtract":
            console.log('subtracting in operate');
            return subtract(a,b);
        case "multiply":
            console.log('multiplying in operate');
            return multiply(a,b);
        case "divide":
            console.log('dividing in operate');
            return divide(a,b);
    }
}


let display=document.querySelector('#display');
let newdisplay=true;

let calculator = {
    op1: false,
    op2: false,
    operation: false,
    result: false,
    clear() {
        this.op1 = false;
        this.op2 = false;
        this.result = false;
        this.operation = false;
    },
}

document.querySelectorAll(".number").forEach(button => {
    button.addEventListener('click', function(e){
        console.log("clicked a number button!")
        console.log(e.target.value);
        if (e.target.id == 'decimal') button.disabled = true;
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
    document.querySelector('#decimal').disabled = false;
    calculator.clear();
})

let equals = document.querySelector("#equals");
equals.addEventListener('click',function(){
    console.log("in Equals");
    console.log(calculator);
    let newOp = display.innerHTML;
    if (calculator.op1){
        calculator.op2 = newOp;
        calculator.result = operate(calculator.operation,parseFloat(calculator.op1),parseFloat(calculator.op2));
        display.innerHTML = calculator.result;
        calculator.op1 = false;
        calculator.op2 = false;
    } 
    console.log(calculator);

});

document.querySelectorAll(".operation").forEach(button => {
    button.addEventListener('click', function(e){
        console.log("clicked an operation button!")
        console.log(e.target.value);
        newdisplay = true;
        document.querySelector('#decimal').disabled = false;
        let newOp = display.innerHTML;
        display.innerHTML = 0;
        if(calculator.op1){
            console.log("operating");
            calculator.op2 = newOp;
            calculator.result = operate(calculator.operation,parseFloat(calculator.op1),parseFloat(calculator.op2));
            console.log(calculator);
            calculator.op1 = calculator.result;
            calculator.op2 = false;
            calculator.operation = e.target.id;
            display.innerHTML = calculator.result;
        }
        else {
            calculator.op1 = newOp;
            calculator.operation = e.target.id;
            display.innerHTML = '';
        }

    });
});

