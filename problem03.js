//Practice Problem 3
/*
Write an arrow function that will take 3 parameters (first two parameters will be numbers and the third
parameter will be a string) that will perform arithmetic operation depending on the third parameter and
will print the result. For example:
1. Print result of num1+num2 if operation is “add”
2. Print result of num1-num2 if operation is “subtract”
3. Print result of num1*num2 if operation is “multiply”
4. Print result of num1/num2 if operation is “divide”
5. Print result of num1%num2 if operation is “modulus”
6. Else print “Invalid operation”
*/


const arrowFun = (a,b,c) => {
    if(c=="add"){
        return a+b;
    }
    else if(c == "subtract"){
        return a-b;
    }
    else if(c == "multiply"){
        return a*b;
    }
    else if(c == "devide"){
        return a/b;
    }
    else if(c=="modulus"){
        return a%b;
    }
    else{
        return "Invalid Operation";
    }
}
const result = arrowFun(2,3,'add');
console.log(result);