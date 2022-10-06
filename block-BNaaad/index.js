console.log('Welcome to Node.js');

function sumTwoNumber(a, b) {
    console.log(a + b);
}
sumTwoNumber(2, 4);

function squareNumber(a) {
    console.log(a * a);
}
squareNumber(12);
let sum = () => {
    for (var i = 1; i <= 10; i++) {
        sum += i;
    }
    return sum;
};

console.log(sum);