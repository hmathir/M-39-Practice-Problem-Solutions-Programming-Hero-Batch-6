//Practice Problem 2

//Change the value stored in the storeFalsyValue variable to a falsy value, such that the code in the else statement executes.

let storeFalsyValue = true;
if(!storeFalsyValue) { //adding bang (!) on here and convert it to not true means falsy value.
console.log(`Nothing to show!`);
}
else {
console.log(`You are amazing!`);
}