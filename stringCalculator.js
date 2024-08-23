function add(numbers) {
    if (numbers === undefined || numbers === null || numbers === "") return 0;

    const delimiterRegex = /^\/\/(.+)\n/;
    // Default delimiter (comma and newline)
    let delimiter = /,|\n/;
    let numberList = numbers;

    // Check if there's a custom delimiter
    const customDelimiterMatch = numbers.match(delimiterRegex);
    if (customDelimiterMatch) {
        delimiter = new RegExp(customDelimiterMatch[1]);
        numberList = numbers.split("\n").slice(1).join("\n");
    }

    const numArray = numberList.split(delimiter);
    let sum = 0;
    let negatives = [];

    numArray.forEach(num => {
        const n = parseInt(num, 10);
        if (isNaN(n)) return;
        if (n < 0) {
            negatives.push(n);
        } else {
            sum += n;
        }
    });

    // Throw an exception if there are negative numbers
    if (negatives.length > 0) {
        throw new Error(`Negative numbers not allowed: ${negatives.join(", ")}`);
    }

    return sum;
}

function calculate() {
    const input = document.getElementById("numbersInput").value;
    const resultField = document.getElementById("result");
    const errorField = document.getElementById("error");

    try {
        const result = add(input);
        resultField.textContent = "Sum: " + result;
        errorField.textContent = "";
    } catch (error) {
        resultField.textContent = "";
        errorField.textContent = error.message;
    }
}

module.exports = add;

