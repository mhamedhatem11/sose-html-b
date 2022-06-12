const list = document.querySelector('.list');
const products = {
    1: {
        "name": 'man clothes',
        "price": '120'
    },
    2: {
        "name": 'man clothes',
        "price": '120'
    },
    3: {
        "name": 'man clothes',
        "price": '110'
    },
    4: {
        "name": 'man clothes',
        "price": '100'
    }
    
    
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