//Practice Problem 1

//1) If I write []==true,will it show true or false? Check it out.
//false
if([]==true){
    console.log('true');
}
else{
    console.log('false');
}

//2) Use === to check if the true === "true" gives true or false.
//fales
if(true === "true"){
    console.log('true');
}
else{
    console.log('false');
}

//3) Write an arrow function that will take a parameter and will check if the parameter is a number or not by using isNaN(). And return true or false.

const arrowFunction = (para) => {
    if(typeof(para) != 'number'){
        return false;
    }
    else{
        return true;
    }
}
const result = arrowFunction(3);
console.log(result);