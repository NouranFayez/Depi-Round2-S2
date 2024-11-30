

var n = 20
// n = n + 5

// console.log(n+=5)
// console.log(n-=10)
// console.log(n*=2)
// console.log(n)


// -- comparison Operator ==> > , >= , < , <= , == , === , != , !== (return boolean)

var num1 = 10
var num2 = 30
var num3 = 10

// console.log(num1 > num2) // false
// console.log(num1 < num2) // true

// console.log(num1 >= num3)

var h = 30
var k = "30"


// console.log(h == k) // value ==> true
// console.log(h === k) // value - datatype ==> false

// console.log(h != k) // value  ==> false
// console.log(h !== k) // value - datatype ==> true

var t = false
// console.log(typeof(t))
// console.log(typeof t)

// console.log(typeof t == "boolean")
// console.log(typeof t == "number")



var str = "lorem"

// console.log(str == "lorem")
// console.log(typeof str == "string")
// console.log(str > num1)

// console.log("-----------------------------------")
// // && ==> true , true , true = true
// // || ==> fals e, false , false , true = true
// console.log((str == "lorem" &&  typeof str == "string") || str > num1) // false
// console.log(str == 30 || str == "js" || str == 'lorem') // true

// console.log("-----------------------------------")

// console.log(!str == 'lorem')


// -- ternary operator ==> (condition) ? true : false

// var age = 10 ;
// (age == 10 && typeof age == "number" && age > 20) ? console.log('correct') : console.log('wrong')



//  var age = 10 ; // true
//  var age = 0 ; // false
//  var age = "" ; // false
//  var age = "bjhbhjvghcg" ; // true
//  var age = null ; // false
//  var age; // undefined // false

//  falsy value ==> 0 , -0 , NaN  , null , undefined , ""
//  truthy value ==> 10 , "string" , true 
// (age) ? console.log('correct') : console.log('wrong')


// var course = "Js"

//  if(course == "Js"){
//    var result = 'correct'
//    console.log(result)
// }
// else {
//     var result = 'wrong'
//     console.log(result)
// }


// var userName = prompt("enter your name")
// console.log(userName)


// var course = prompt('enter course name')

// if(course != null ){
//     if (course == "js" || course == "JS" || course == "Js") console.log('javascript')
//     else if (course == 'html' && typeof course == "string") console.log('hypertext markup language')
//     else if (course == 'css' || course > 20) console.log('cascading style sheet')
//     else console.log('invalid course')
// }



// switch case ==> strict condition (===)
// var course = prompt('enter course name')

// var course = "20"

// switch (course) {
//     case "js":
//     case "Javascript"  : 
//         console.log('javascript')
//         break
//     case "html":
//         console.log('html')
//         break
//     case "css":
//          console.log('css')
//          break
//      case 20 : 
//         console.log('number = 20')  
//         break  
//     default: console.log('invalid')
// }

// console.log(1)
// console.log(2)
// console.log(3)
// console.log(4)
// console.log(5)
// console.log(6)

// for(variable ; condition ; increment/decrement){
//     code ...
// }


// for(var i = 1 ; i <= 10; i++){
//     if(i == 4) console.log('i =  4')

//      if(i == 8) break  
//      if(i == 3) continue
//     console.log(i)
// }


// variable 
// while(condition){
//     code ...
//     increment++
// }



// var i = 5
// while(i <= 10){
//     console.log(i)
//     i++
// }



// function sumNumbers(){
//     var n =  10
//     var m = 20
//     //  sum = n + m
//     // console.log(sum)

//     // return n + m
//     return "Javascript"
  
// }

// var sumFromFunction = sumNumbers()

// console.log(sumFromFunction + 50)

// console.log(sum)

// var p = prompt()




// function sumNums(number1 , number2 , number3 = 100){
//     // console.log(number3)
//     var num1 = number1
//     var num2 = number2
//     if(number3 > 50) 
//         return "invalid"
//     else 
//     return null
// }

// var numbers = sumNums(100 , 200 , 7)

// var numbers2 = sumNums(30 , 5)

// console.log(numbers)
// console.log(numbers2)

// sumNums()


// prompt()



var fName = "Tamer"

var lastName = "Ahmed"

function getFullName(lName){
    var fName = prompt('Enter your Name')
    var lastName = lName
    return `${fName} ${lastName}`
}

console.log(getFullName(lastName))


// function num() 10 ,  20


// function looping(num)


