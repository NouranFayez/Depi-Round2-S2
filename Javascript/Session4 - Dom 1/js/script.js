// Dom ==> document object model


// global Object ==> document

console.log(document.getElementsByTagName("h1")) // return htmlCollection


var h1 = document.getElementById("custom-h1-style")
h1.innerText = "Javascript"
h1.style.color = "red"
h1.style.backgroundColor = "lightgray"
h1.style.padding = "10px"
h1.style.border = "3px solid"


var imgs = document.getElementsByClassName('custom-img')  // return htmlCollection

console.log(imgs)

imgs[0].width = "400"
imgs.width = "400"
imgs.hjgjgjg = "hggfjgjh"



var element = document.querySelector('.custom-element span')
var elements = document.querySelectorAll('.custom-element span')
console.log(element)
console.log(elements)

// elements.innerText = "Frontend"
elements[0].innerText = "frontend"
elements[1].innerText = "frontend"

for (var i = 0; i < elements.length; i++) {
    elements[i].innerText = "Depi - cls - Frontend"
}

console.log(document.forms)
console.log(document.images)
console.log(document.scripts)

console.log(document.scripts[0].src)


var div = document.querySelector('#custom-div')

div.classList.add('custom-element-style' , "custom-class" , "custom-margin")
div.classList.remove('div-class')
div.classList.toggle('toggle-class')


