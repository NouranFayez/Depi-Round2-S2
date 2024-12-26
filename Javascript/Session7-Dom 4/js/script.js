setTimeout(()=>{
    console.log('js')
    // let p = prompt('enter your Name')
    // var h1Element = document.getElementById('h1Element')
    // h1Element.innerText = `welcome ${p}`
} , 5000)

console.log('Html , css')

var i = 0
var counter = document.getElementById('counter')
let set  = setInterval(()=>{
    // console.log(set)
    counter.innerText = i
    if(i == 100) clearInterval(set)
    // console.log('counter')
    i+=10
} , 200)


/// Elements Relationship

var ul = document.getElementById('ul-element')
var ulTag = document.getElementsByTagName('ul')

console.log(ulTag)
console.log(ul.children)

ul.firstElementChild.style.background = "lightgray"
ul.lastElementChild.style.background = "lightgray"


let liElement = document.getElementById('li-element')

liElement.parentElement.style.fontSize = "20px"

liElement.nextElementSibling.style.color = "red"
liElement.previousElementSibling.style.color = "blue"


