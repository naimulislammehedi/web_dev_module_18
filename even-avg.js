function evenAvg(numbers) {
    let sum = 0;
    let count = 0;

    for (const number of numbers) {
        if (number % 2 === 0) {
            sum += number;
            count++;
        }
    }

    if (count === 0) {
        return 0; // no even numbers
    }

    return sum / count;
}

// Test
const numbers = [4, 1, 4, 19, 5];

console.log(numbers);
console.log("Average of the even numbers is:", evenAvg(numbers));
