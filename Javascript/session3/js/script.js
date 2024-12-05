// function statment 

// function getFullName(){
//     return 'Zain Tamer'
// }

// var userFullName = getFullName()
// console.log(userFullName)


// function expression

// var userFullName = function (item){
//     console.log(item)
//     return 'zain tamer'
// }

// console.log(userFullName(10))

// arrow function 

// var userName = ()=>{
//     return "zain tamer"
// }
// var userName = ()=> "zain tamer"


// console.log(userName())


// function num (value){
//     return value > 10
// }


// var num = (value)=> value > 10
// console.log(num(20))


///////// array

// var userName = "Nouran"
// var userName2 = "Ahmed"
// var userName3 = "Fayez"
// var userName4 = "Tmaer"

var usersName = ["Nouran" , "Ahmed" , "Fayez"  , "Tamer"]
// console.log(usersName)


var fName = usersName[1] // get item

console.log(fName)

usersName[4] = "Zain" // add item


usersName[usersName.length] = "Marwa"

// console.log(usersName)

//// Methods of Array

// var courses = ["Html" , "Css" , "Js"]

// courses.unshift("freelancing" , "Prompt Engineering")


// courses.push("Ts" , "Angular" , "Node")

// console.log(courses)

// var user = ["Ahmed" , 20 , true , "Egyptian" , "October"]


// user.shift()
// user.shift()
// user.shift()

// user.pop()
// user.pop()

// splice(index , deletedCount , item/s) ==> remove / add


// user.splice(3 , 0 , "Engineer" , true , 10) // add items

// user.splice(2 , 2) // remove items


// user.splice(1 , 1 , "Frontend" , "Backend") // add / remove
// console.log(user)



// console.log(user.includes(10))



// console.log(user[0])
// console.log(user[1])
// console.log(user[2])
// console.log(user[3])
// console.log(user[4])
// console.log(user[5])


// for(var i = 0 ; i < user.length ; i++ ){
//     // console.log(user[i])
// }

// console.log(user)

// user.forEach((ele , index, newArray)=>{
//         // console.log(`${ele} : ${index} `)
//         // console.log(newArray)
//         // if(ele == promptValue) 

// })

var user = ["Ahmed" , 20 , true , "Egyptian" , "October" , 20]

var index = user.findIndex((item)=> item == 20)
var index2 = user.findIndex((item)=> item == 200) // -1

// console.log(index)
// console.log(index2)

var nums = [1 , 6, 2, 8, 20 , 50]

var item = nums.find(ele => ele > 6)
var item2 = nums.find(ele => ele > 100) // undefined

// console.log(item)
// console.log(item2)


var newArray = nums.filter(item => item > 6)
var newArray2 = nums.filter(item => item > 200)

// console.log(newArray)
// console.log(newArray2)


// map , sort , reverse , indexof , slice ==> search 




// arr = [] // empty array

// var f = (num)=>{
//     arr.push(num) // push item
// }

// f(10)
// console.log(arr)


// f(20)
// console.log(arr)


// f(40)

// console.log(arr)

var userName ="Zain"
var userAge = 10
var address = "October"

// var userInfo = ["Zain" , 10 , "October"]

var userInfo = {
    userName : 'Zain',
    userAge : 20 ,
    userAddress : 'October'
}

var userInfo2 = {
    userName : 'Tamer',
    userAge : 40 ,
    userAddress : 'October'
}

var userInfo3 = {
    userName : 'Marwa',
    userAge : 40 ,
    userAddress : 'Maadi'
}
var userInfo4 = {
    userName : 'Nada',
    userAge : 30 ,
    userAddress : 'Maadi'
}




userInfo.isGraduated = false // set new property

userInfo.userAddress = "Nasr city" // update

console.log(userInfo)


var usersInfo = [
    {
        userName : 'Zain',
        userAge : 20 ,
        userAddress : 'October'
    },
    {
        userName : 'Tamer',
        userAge : 40 ,
        userAddress : 'October'
    },
    {
        userName : 'Marwa',
        userAge : 40 ,
        userAddress : 'Maadi'
    },
    {
        userName : prompt('enter user name'),
        userAge : 30 ,
        userAddress : 'Maadi'
    }
]

console.log(usersInfo)
console.table(usersInfo)
console.log(usersInfo[0])

usersInfo.findIndex(item => item.userName == "Tamer")


prompt('enter user Name')


//////////// Bank Task 

// addUser() ==> name , id , balance 

// editUserBalanceById() ==> id , newBalance

// deleteUserById() ==> id
