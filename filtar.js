const numbars = [1, 2, 5, 6, 9, 7, 10, 15]
const playear = [5, 6, 9, 7, 10, 15];

// const selected = playear.filter(p => p > 15);
const selected = playear.filter(p => p %2 === 1);
console.log(selected);


const frends = ['kausar', ' korim', ' jabbar', 'kamal'] ;
const fullFrends = frends.filter(frends => frends.length > 6);
console.log(fullFrends);
