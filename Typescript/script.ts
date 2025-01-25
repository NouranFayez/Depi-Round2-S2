// let x : number
// x = 20
// console.log(x)
// let y : string = "lorem"
// let b : boolean = true
// let arr :number[] = [5 , 4 , 6]
// console.log(arr)
// tuple 
// let arr : [number , string , boolean] = [3 , "lorem" , true]
// let p : string | null = prompt("enter your name")
// let element : HTMLElement | null = document.getElementById('elementID')
// let element : any = document.getElementById('elementID')
// element?.classList.add('class')
// let arr : any = []
// let myFunction = (name : string , address : any)=>{
//     console.log(address)
// }
// myFunction("nouran" , true)
// myFunction("zein" , 30)
// myFunction("ahmed" , "lorem")
// let restParameters = (...items : number[])=>{
//     console.log(items)
// }
// restParameters('zein' , true , 10 , 'nasr city')
// restParameters(10 , 20 , 30)
// type StringValue = string
// let y : StringValue
// y = "40"


// interface Info {
//     name : string ,
//     age : number , 
//     address? : string
// }

// let user : Info = {
//     name : "Nouran" ,
//     age : 10
// }

// let user2 : Info = {
//     name : "zein",
//     age : 5,
//     address : "maadi"
// }
// interface MedicalInfo extends Info {
//     medicalHistory : string
// }
// let userMedicalInfo : MedicalInfo = {
//     name : 'Tamer',
//     age : 40, 
//     medicalHistory : "lorem"
// }
// console.log(userMedicalInfo.medicalHistory)
// userMedicalInfo.name = "zein"
// console.log(userMedicalInfo)


class Info {
    firstName : string 
    lastName : string 
   protected age : number
    constructor (fName: string , lName : string , age : number){
        this.firstName = fName
        this.lastName = lName
        this.age = age
         console.log(age)
    }

    getName(){
        return `${this.firstName} ${this.lastName}`
    }
}

let userInfo = new Info('Tamer' , "Fayez" , 40)
console.log(userInfo.getName())

class Employee extends Info {
   private address : string 
   readonly ID : number
    constructor(address : string , id : number , fName : string , lName : string , age : number){
        super(fName , lName , age)
        this.address = address
        this.ID = id

        console.log(age)
    }

    addressList(){
        console.log(this.address)
    }

    get _address(){
       return this.address 
    }

    getName(){
       return super.getName()+ " Inside child class" 
    }
}

let user = new Info("Zein" , "Tamer" , 15)
// console.log(user.age)


let p = new Employee('maadi' , 101 , 'zein' , 'tamer' , 10)

// console.log(p.addressList())
console.log(p._address)
console.log(p.getName())


// p.ID = 202

console.log(p)

// access modifier ==> public (default) , private , Readonly , protected

class Emp {
    x = new Employee("october" , 302 , "Marwa" , "Mohamed" , 20)

    constructor(){
        // console.log(this.x.age)
    }
}


class Y {
    addtess : string
    constructor(name : string , address : string){
        // console.log(name)
        this.addtess = address
    }
}

let userName = new Y('Ahmed Fayez' , "nasr city")
console.log(userName)