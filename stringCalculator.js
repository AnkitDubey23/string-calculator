function add(numbers) {
    if (numbers === "") {
        return 0;
    }
    //initialize sum here
    let sum = 0;
    
    let numArray = numbers.split(",");
    numArray.forEach(num => {
        sum += parseInt(num, 10);
    });

    return sum;
}

module.exports = add;
