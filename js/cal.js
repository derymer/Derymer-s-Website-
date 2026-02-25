function calc(op){
    let a = parseFloat(document.getElementById("num1").value);
    let b = parseFloat(document.getElementById("num2").value);
    let r;

    if(op === '+') r = a + b;
    else if(op === '-') r = a - b;
    else if(op === '*') r = a * b;
    else if(op === '/') {
        if(b === 0){
            r = "Cannot divide by zero";
        } else {
            r = a / b;
        }
    }

    document.getElementById("result").innerHTML = "Result: " + r;
}
