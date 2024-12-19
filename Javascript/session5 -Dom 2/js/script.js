// document.getElementById()
// document.getElementsClassName()
// document.getElementsTagName()
// document.querySelector()
// document.querySelectorAll()

// 
// console.log(img.src)

console.log(document.images)

function handleClick(){
    var img = document.getElementById('custom-img')
    img.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVEll8uICS2xqheOz2l1Vh1DcvpEyxgVrNfw&s"
}




function handleMouseEnter(){
    var div = document.querySelector('#custom-div')
    div.style.backgroundColor = "lightgray"
    
}

function handleMouseLeave(){
      var div = document.querySelector('#custom-div')
    div.style.backgroundColor = "white"
}

function handleMouseAction(flag , bgColor , element){
    console.log(flag)
    console.log(bgColor)
    console.log(element)
    element.style.backgroundColor = bgColor
    // (flag == 'mouseOver') ?  div.style.backgroundColor = "lightgray" : div.style.backgroundColor = "white";
}


var user ={
    name : "Mai",
    lName : "Ahmed",
    fullName : function(){
        return `${this.name} ${this.lName}`
    }
}


function handleClick(element){
    var lis = document.getElementsByClassName('custom-li')
    for (var i = 0; i < lis.length; i++) {
        lis[i].style.color = "black"
        
    }
    element.style.color = "red"
}


var myInput = document.getElementById('custom-input')

myInput.addEventListener('input' , function(e){
//   console.log(e.target.value)
})

myInput.addEventListener('change' , function(e){
    console.log(e.target.value)
  })
var select = document.querySelector('#custom-select')

select.addEventListener('change' , function(e){
    console.log(e.target.value)
})


var myForm = document.getElementById('custom-form')
myForm.addEventListener('input' , function(e){
    console.log(e.target.value)
})

myForm.addEventListener('submit' , function(e){
    e.preventDefault()
    console.log(e)
})


var scrollDiv = document.querySelector('.custom-scroll-div')

scrollDiv.addEventListener('scroll' ,function(e){
    console.log(e.target.scrollTop)
})


/// DOM ==> document object model
/// BOM ==> browser object model
var upArrow = document.getElementById('up-arrow')
window.addEventListener('scroll' , function(){
    console.log(document.documentElement.scrollTop)

    if(this.document.documentElement.scrollTop > 500){
        upArrow.style.display = "block"
    }
    else upArrow.style.display = "none"
})

// window.document.getElementById()
// window.console.log()
// window.prompt('sdfghjk')
