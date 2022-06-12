const list = document.querySelector('.list');
const products = {
    1: {
        "name": 'women clothes',
        "price": '70'
    },
    2: {
        "name": 'women clothes',
        "price": '182'
    },
    3: {
        "name": 'women clothes',
        "price": '60'
    },
    4: {
        "name": 'women clothes',
        "price": '58'
    },
    5: {
        "name": 'women clothes',
        "price": '144'
    },
    6: {
        "name": 'women clothes',
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