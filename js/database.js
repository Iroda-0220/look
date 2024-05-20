let orders = window.localStorage.getItem('orders')
let users = window.localStorage.getItem('users')
let foods = window.localStorage.getItem('foods')

users = JSON.parse(users) || [
    { userId: 1,userName: 'Mirmuhsin', contact: '998904039606' },
    { userId: 2,userName: 'Iroda', contact: '998924234234' },
    { userId: 3,userName: 'Abdulhamid', contact: '998923445678' },
    { userId: 4,userName: 'Otabek', contact: '998913456788' },
    { userId: 5,userName: 'Shamsiddin', contact: '998923456433' },
    { userId: 6,userName: 'Shohrux', contact: '998937732706' },
];
foods = JSON.parse(foods) || [
    { foodId: 1, foodName: "burger_cheese", foodImg: "./img/burger_cheese.jpeg"},
    { foodId: 2, foodName: "chicken_togora", foodImg: "./img/chicken_togora.jpeg"},
    { foodId: 3, foodName: "chicken_wings", foodImg: "./img/chicken_wings.jpeg"},
    { foodId: 4, foodName: "cola", foodImg: "./img/cola.jpeg"},
    { foodId: 5, foodName: "combo", foodImg: "./img/combo.jpeg"},
    { foodId: 6, foodName: "fanta", foodImg: "./img/fanta.jpeg"},
    { foodId: 7, foodName: "spinner", foodImg: "./img/spinner.jpeg"},
];
orders = JSON.parse(orders) || [
    { userId: 1, foodId: 2, count: 3},
    { userId: 2, foodId: 3, count: 1},
    { userId: 3, foodId: 2, count: 3},
    { userId: 4, foodId: 4, count: 4},
]