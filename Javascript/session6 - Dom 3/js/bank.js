let myForm = document.getElementById('myForm')
let myTable = document.getElementById('myTable')

let users = []

let addUser = (userData) => {
    let user = {
        name: userData.userName.value,
        Id: userData.userID.value,
        balance: userData.userBalance.value,
    }
    users.push(user)
    console.table(users)

    // showData()
}


let showData = () => {
    // <tr>
    //     <td>Nouran</td>
    //     <td>1</td>
    //     <td>1000</td>
    // </tr>
    myTable.innerText = ""
    users.forEach((item , i , arr)=>{
        let tr = document.createElement('tr')
        let td1 = document.createElement('td')
        td1.innerText = item.name
        let td2 = document.createElement('td')
        td2.innerText = item.Id
        let td3 = document.createElement('td')
        td3.innerText = item.balance
        let td4 = document.createElement('td')
        let editBtn = document.createElement('button')
        editBtn.innerText = "Edit user Balance"
        let deleteBtn = document.createElement('button')
        deleteBtn.innerText = 'Remove User'
        td4.appendChild(editBtn)
        td4.appendChild(deleteBtn)
        tr.appendChild(td1)
        tr.appendChild(td2)
        tr.appendChild(td3)
        tr.appendChild(td4)
        myTable.appendChild(tr)
        editBtn.addEventListener('click' , function(){
            console.log('click')
        })


    })
}


myForm.addEventListener('submit', function (e) {
    e.preventDefault()
    console.log(e.target.elements.userName.value)
    console.log(e.target.elements.userID.value)
    console.log(e.target.elements.userBalance.value)
    addUser(e.target.elements)
    showData()

})


let usersInfo =[
    {name : 'nouran' , ID : 1 , Balance : 10000 },
    {name : 'Marwa' , ID : 2 , Balance : 10000 },
    {name : 'Tamer' , ID : 3 , Balance : 10000 },
    {name : 'Fayez' , ID : 4 , Balance : 10000 },
]



// localStorage sessionStorage

// localStorage.setItem("userName" , "Nouran")
// localStorage.setItem("userAddress" , "Nasr city")

// // JSON ==> javascript object notattion



// localStorage.setItem('userInfo' , JSON.stringify(usersInfo))

// console.log(localStorage.getItem('userInfo'))

// let returenedData = JSON.parse(localStorage.getItem('userInfo'))

// returenedData.push({name:'zain' , ID : 4 , Balance : 30000})

// console.log(returenedData)

// console.log(localStorage.getItem('age'))

localStorage.removeItem('userName')


// sessionStorage.setItem('userName' , 'Nouran')