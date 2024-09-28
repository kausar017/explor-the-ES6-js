const products = [

    {id: 1, name: 'lenovo', price: 50000},
    {id: 2, name: 'hp', price: 40000},
    {id: 3, name: 'dell', price: 45000},
    {id: 4, name: 'mac', price: 150000},
]

const names = products.map(products => products.name);
console.log(names);

const price = products.map(p => p.price);
console.log(price);

products.forEach(p => console.log(p.id));

const expensib = products.filter(p => p.price > 50000);
console.log(expensib);

const loPrice = products.find(p => p.price < 50000);
console.log(loPrice);

const total = products.reduce((accumulator, current) => accumulator + current.price,0);
console.log(total);
