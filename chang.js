// data access

const data = [{id: 1 , name: 'kausar', address: 'Mymensingh'}];
// console.log(data[0].address);

const products = {
    const: 5000,
    data: [
        {id: 1, name: 'lenovo leptop', price: 65000},
        {id: 1, name: 'macboock', price: 165000},

    ]
};

// console.log(products.data[1].price);

const user = {
    id : 5000,
    name: 'kausar mia',
    address : {
        street : {
            first : '54/1 uttor side',
            secend : 'Gouripur',
            thard: 'no dorai',

        },
        city: 'Dhaka',
    }
        
};

console.log(user.address.street.secend);

const usar2 = {
    
    id: 56664,
    name: 'kausar mia',
    address: {
        city: 'mymensngh',
        country: 'Bangladash',
    }
}

console.log(usar2.address.street?.secend);

