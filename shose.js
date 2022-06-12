const list = document.querySelector('.list');
const products = {
    1: {
        "name": 'shoes',
        "price": '70'
    },
    2: {
        "name": 'shoes',
        "price": '182'
    },
    3: {
        "name": 'shoes',
        "price": '60'
    },
    4: {
        "name": 'shoes',
        "price": '58'
    },
    5: {
        "name": 'shoes',
        "price": '144'
    },
    6: {
        "name": 'shoes',
        "price": '75'
    },
    7: {
        "name": 'shoes',
        "price": '182'
    },
    8: {
        "name": 'shoes',
        "price": '60'
    },
    9: {
        "name": 'shoes',
        "price": '58'
    },
    10: {
        "name": 'shoes',
        "price": '144'
    },
    11: {
        "name": 'shoes',
        "price": '75'
    },
    
}
let item = [];
let bill = [];

function addToCart(x) {
    const span = `<span class="price">$${products[x].price}</span>`
    const result = products[x].name + " " + span;
    if (item.includes(products[x]) === false) item.push(result);
    bill.push(products[x].price);

}

function cart() {
    list.innerHTML = "";
    for (let i = 0; i < item.length; i++) {
        let text = item[i];
        let listItem = document.createElement("LI");
        listItem.innerHTML = text;
        list.appendChild(listItem);
        listItem.style.textAlign = 'left';
    }
    const btn = document.querySelector('.bill');
    const total = bill.reduce(add);

    function add(accumulator, a) {
        return parseInt(accumulator) + parseInt(a);
    }
    console.log(total);
    btn.innerHTML = `Total Bill is $${total}`;
}