const numbars = [4, 5, 6, 7, 8, 9];

function doboleIt(num) {
    console.log('num now', num);
    return num * 2;
}

const result = numbars.map(doboleIt)

// const doubled = [];
// for(const num of numbars) {
//     const double = num * 2;
//     doubled.push(double);

// };

// console.log(doubled);

