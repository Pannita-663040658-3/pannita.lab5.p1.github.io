const list = readInput();

if (list.length === 0) {
    displayStats([], 0, 0, 0);
} else {
    const sum = list.reduce((a, b) => a + b, 0);
    const avg = (sum / list.length).toFixed(2);
    const max = Math.max(...list);
    const min = Math.min(...list);

    displayStats(list, avg, max, min);
}


function validateInput(input) {
    const num = Number(input);
    return Number.isInteger(num);
}

function readInput() {
    let list = [];
    while (true) {
        let input = prompt("Enter a positive integer (a negative integer to quit):");

        if (input === null) continue;

        if (!validateInput(input)) continue;

        const num = Number(input);

        if (num < 0) break;

        if (num > 0) {
            list.push(num);
        }
    }

    return list;
}

function displayStats(list, average, max, min) {
    const resultText = `For the list = ${list.join(', ')}, the average is ${average}, the maximum is ${max}, and the minimum is ${min}`;
    alert(resultText);
}

