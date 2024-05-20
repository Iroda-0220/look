const customersList = document.querySelector('.customers-list')
const foodsSelect = document.querySelector('#foodsSelect')
const ordersList = document.querySelector('.orders-list')
const userAdd = document.querySelector('#userAdd')
const usernameInput = document.querySelector('#usernameInput')
const telephoneInput = document.querySelector('#telephoneInput')
const clientId = document.querySelector('#clientId')
const customerName = document.querySelector('.customer-name')
const foodsForm = document.querySelector('#foodsForm')
const foodsCount = document.querySelector('#foodsCount')
const orderCount = document.querySelector('.order-count')
const orderName = document.querySelector('.order-name')



function renderUsers () {
    customersList.innerHTML= null
    for (const user of users) {
        // const li = document.createElement('li')
        // const span = document.createElement('span')
        // const a = document.createElement('a')

        const [ li,span,a ] = createElement('li','span','a')

        li.classList.add('customer-item')
        span.classList.add('customer-name')
        a.classList.add('customer-phone')
        a.setAttribute('href',"tel:+" + user.contact)

        span.textContent = user.userName
        a.textContent = user.contact

        li.append(span,a)
        customersList.append(li)
        // console.log(li)

        li.addEventListener('click', () => {
            renderOrders(user.userId)
            // alert('salom')
        })
    }
}

function renderFoods () {
    for(const food of foods) {
        console.log(food)
        const[ option ] = createElement('option')
        option.textContent = food.foodName
        option.value = food.foodId
        foodsSelect.append(option)
        console.log(option)
    }
}



function renderOrders (userId) {
    ordersList.innerHTML = null
    for (const order of orders) {
        if (!(order.userId == userId)) continue
    
        const food = foods.find(el => el.foodId == order.foodId)

        const [ elLi, elImg, elDiv, elName, elCount ] = createElement('li','img','div','span','span')

        elLi.classList.add( 'order-item')
        elName.classList.add('order-name')
        elCount.classList.add('order-count')

        elName.textContent = food.foodName  
        elCount.textContent = order.count
        elImg.setAttribute('src',food.foodImg)

        elDiv.append(elName,elCount)
        elLi.append(elImg,elDiv)
        ordersList.append(elLi)

        console.log(elImg)
        console.log(elLi)

    }
}

function addUser () {

}

function addOrder (event) {
    event.preventDefault()
    const foodId = foodsSelect.value.trim()
    const count = foodsSelect.value.trim()
    const userId = clientId.textContent
    let order = orders.find(el => el.foodId == foodId && el.userId == userId)
    console.log(order)
    if(
        !count ||
        +count > 10 ||
        !userId


    ){
        alert("Notogri zakaz kiritdingiz")
        return

    }

    if(order) {
        order.count = +count + +order.count
    } else {
        order = {
            foodId,
            userId,
            count
        }
        order.push(order)
    }
    window.localStorage.setItem(`orders`, JSON.stringify(orders))
    return renderOrders(userId)

}
renderUsers()

renderOrders ()

userAdd.addEventListener('submit', function() {
    event.preventDefault()

    const userName = usernameInput.value.trim()
    const contact = telephoneInput.value.trim()
    console.log(userName)
    console.log(contact)

    if (!userName || userName.length > 30) {
        return alert("'Ismni to'g'ri kiriting")
    }

    if (/998(9[0123456789]|3[3]|7[1]|8[8])[0-9]{7}$/.test(contact)) {
        return alert("Nomer xato")
    }

    const newUser = {
        userId: users .length ? users[users.length - 1].userId + 1 : 1,
        userName: userName,
        contact: contact
    }

    users.push(newUser)
    window.localStorage.setItem(`users`, JSON.stringify(users))
    userName.textContent = null
    contact.textContent = null
    return renderUsers()    

})