let input;
do {
    input = prompt("Enter a positive integer");
} while (!validateInput(input));

const limit = Number(input);
const primes = findPrimes(limit);
displayPrimes(primes, limit);

function validateInput(input) {
    const num = Number(input);
    return Number.isInteger(num) && num > 0;
}

function findPrimes(limit) {
    const primes = [];
    checkLoop:
    for (let i = 2; i <= limit; i++) {
        for (let j = 2; j * j <= i; j++) {
            if (i % j === 0) {
                continue checkLoop; 
            }
        }
        primes.push(i);
    }
    return primes;
}


function displayPrimes(primes, limit) {
    const resultText = `For n = ${limit} prime number are ${primes.join(', ')}`;
    alert(resultText);
}



