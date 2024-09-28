/**
 *1. var let const
 * 2.default paramitar
 * 3. template string
 * 4. arrow function 
 * destracturing and spread operator
 */


 const a = 56;
 const numbars = [55, 56, 58, 59];
 const parson = {
    name : 'kasurmia',
    age: 21,
 };

 const massage = `Hi, ${parson.name} has a: ${a} access to ${numbars[2]}`;
 console.log(massage);
 
 const square = x => x * x;
 const sum = (a, b) => a + b;
 const sumEl = (a, b) => a * b;
 const sumthing = sum(10, 20);
 const sumt = sumEl(10, 20);
 console.log(sumthing);
 console.log(sumt);
 
 const {} = {}
 