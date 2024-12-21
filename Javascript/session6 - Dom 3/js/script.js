// var - let - const

// var function scope & global Scope
// let - const ==> block scope
// hoisting

// var fName // undefined

// console.log(fName)

// var fName = "Nada"

// console.log(lName)
// let lName = "Fayez"


function getName(){
    let userAge = 20
    var isGraduated = true
    if(true){
        let userName = "Ahmed"
        var userAddress = "Nasr city"
        console.log(userAge)
        console.log(isGraduated)
    }
    // console.log(userName)
    // console.log(userAddress)
}

getName()


var address = "Nasr city"

var address = "October"

let familyName = "Fayez"

 familyName = "cghvhg"

 const x = true

//   x = false


// console.log(address)
// console.log(x)

let divContainer = document.getElementById('div-container')

let btn = document.querySelector('#btn')

btn.addEventListener('click' , function(){
    // divContainer.innerHTML = "<p>Lorem ipsum dolor sit.</p>"
   let paragraph =  document.createElement("p")
   paragraph.innerText = "Lorem ipsum dolor sit."
   let h2Element = document.createElement('h2')
   h2Element.innerText = "Title"

//    divContainer.appendChild(h2Element)
//    divContainer.appendChild(paragraph)

divContainer.prepend(h2Element)
divContainer.prepend(paragraph)

   console.log(h2Element)
})

