// Grab elements
const table = document.querySelector('#table')


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


// call functions

loopStorage()

// logs
console.log(localStorage)
// console.log(table)