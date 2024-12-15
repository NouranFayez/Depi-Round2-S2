var user = {
    fName : 'Tamer',
    lName : 'Ahmed',
    fullName : function(){
        return `${this.fName} ${this.lName}`
    },
    addresses : function(){
        return {
            homeAddress : "Nasr city",
            officeAddress : "October",
            test : function(){
                return "Javascript"
            },
            test2 : function(){
                return ['html' , 'css']
            }
        }
    }

}


// console.log(user.fName)
// console.log(user.fullName())
// console.log(user.addresses())
// console.log(user.addresses().homeAddress)
// console.log(user.addresses().test())
// console.log(user.addresses().test2()[0])


// var userInfo = function(){

// }


////// string Methods

var str = "         lorem , html , css , lorem           "

console.log(str[0])
console.log(str[1])
console.log(str.length)
console.log(str)
console.log(str.trim())
console.log(str.replace("lorem" , 'Javascript'))
console.log(str.replaceAll("lorem" , 'Javascript'))
/// slice , startsWith , endsWith , uppercase , lowercase ==> search
// str = str.trim()


///// number Methods 
// var p = prompt('enter ID')
// console.log(typeof p)
// console.log("-------------------")
// console.log(parseInt(p))
// console.log(parseFloat(p))

var r = "text"

var age = 10

console.log(isNaN(r))
console.log(isNaN(age)) // false ==> number
console.log("-------------------")

var date = new Date()


console.log(date)
console.log(date.getFullYear())
console.log(date.getHours())

// Date methods ==> search


///////// Math

console.log(Math.random() * 1000)
// Math.round() ==> search
// Math.ceil() ==> search
// Math.floor() ==> search
// Math.abs() ==> search
// Math.max() ==> search
// Math.min() ==> search
// Math.trunc() ==> search
