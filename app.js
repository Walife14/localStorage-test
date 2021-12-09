// Grab elements

const table = document.querySelector('#table')
const form = document.querySelector('#myForm')
const keyInput = document.querySelector('#myKeyInput')
const valueInput = document.querySelector('#myValueInput')
const clearBtn = document.querySelector('#clear-btn')

// functions

const loopStorage = () => {

    for(i=0; i<localStorage.length; i++) {
        let key;
        key = localStorage.key(i)
        // console.log(localStorage.key(i))
        // console.log(localStorage.getItem(key))

        // create tr
        const tr = document.createElement('tr')

        // create td
        const td1 = document.createElement('td')
        const td2 = document.createElement('td')

        // assign values to td
        td1.textContent = localStorage.key(i)
        td2.textContent = localStorage.getItem(key)

        // append tds to tr
        tr.appendChild(td1)
        tr.appendChild(td2)
        
        // append tr to table
        table.appendChild(tr)

    }

}

const addItemToList = (key, value) => {
    // same as last few steps in loopStorage
    const tr = document.createElement('tr')
    const td1 = document.createElement('td')
    const td2 = document.createElement('td')
    td1.textContent = key
    td2.textContent = value
    tr.appendChild(td1)
    tr.appendChild(td2)
    table.appendChild(tr)
}

const addNewItem = (e) => {
    e.preventDefault()

    // add the input values to variables
    const key = keyInput.value
    const value = valueInput.value

    // add the newly given values to localStorage
    localStorage.setItem(key, value)
    console.log(localStorage)

    // run loopStorage again in order to update users list of items
    // I've had to make a new function because re-runing loopStorage
    // adds the previous items aswell.

    addItemToList(key, value)

    // clear input fields

    keyInput.value = ''
    valueInput.value = ''
}

const clearLocalStorage = () => {

    // clears the localStorage
    localStorage.clear()

    // couldn't use reload on table so I force the user to reload their
    // page.
    location.reload()
}


// call functions

loopStorage()

// add event listeners

form.addEventListener('submit', addNewItem)
clearBtn.addEventListener('click', clearLocalStorage)

// logs

console.log(localStorage)
// console.log(table)
// console.log(form)