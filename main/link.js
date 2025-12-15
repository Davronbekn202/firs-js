// let secret = Math.floor(Math.random() * 10) + 1;
// let guess;
// let attempts = 0;

// while (guess !== secret) {
//     guess = Number(prompt("Guess a number between 1 and 10"));
//     attempts++;

//     if (guess > secret) {
//         alert("Too high!");
//     } else if (guess < secret) {
//         alert("Too low!");
//     } else {
//         alert(`Correct! You guessed it in ${attempts} tries.`);
//     }
// }

while (true){
    let a = Number(prompt("First number:"));
    if (a === 0) break;
    let op = prompt("Operator (+ - * /):");
    let b = Number(prompt("Second number:"));

    let result;

    if (op === "+") result = a + b;
    if (op === "-") result = a - b;
    if (op === "*") result = a * b;
    if (op === "/") result = a / b;

    alert("Result: " + result);

}

