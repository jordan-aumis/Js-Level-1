function calc (num1, op, num2) {
    switch (op){
        case "+":
            console.log(num1 + num2);
            break;
        case "-":
            console.log(num1 - num2);
            break;
        case "/":
            console.log(num1 / num2);
            break;
        case "*":
            console.log(num1 * num2);
            break;
        case "%":
            console.log(num1 % num2);
            break;
    }
}

calc(10,"+",2);
calc(10,"-",2);
calc(10,"*",2);
calc(10,"/",2);
calc(10,"%",2);