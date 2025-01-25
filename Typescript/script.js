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
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
var Info = /** @class */ (function () {
    function Info(fName, lName, age) {
        this.firstName = fName;
        this.lastName = lName;
        this.age = age;
        console.log(age);
    }
    Info.prototype.getName = function () {
        return "".concat(this.firstName, " ").concat(this.lastName);
    };
    return Info;
}());
var userInfo = new Info('Tamer', "Fayez", 40);
console.log(userInfo.getName());
var Employee = /** @class */ (function (_super) {
    __extends(Employee, _super);
    function Employee(address, id, fName, lName, age) {
        var _this = _super.call(this, fName, lName, age) || this;
        _this.address = address;
        _this.ID = id;
        console.log(age);
        return _this;
    }
    Employee.prototype.addressList = function () {
        console.log(this.address);
    };
    Object.defineProperty(Employee.prototype, "_address", {
        get: function () {
            return this.address;
        },
        enumerable: false,
        configurable: true
    });
    Employee.prototype.getName = function () {
        return _super.prototype.getName.call(this) + " Inside child class";
    };
    return Employee;
}(Info));
var user = new Info("Zein", "Tamer", 15);
// console.log(user.age)
var p = new Employee('maadi', 101, 'zein', 'tamer', 10);
// console.log(p.addressList())
console.log(p._address);
console.log(p.getName());
// p.ID = 202
console.log(p);
// access modifier ==> public (default) , private , Readonly , protected
var Emp = /** @class */ (function () {
    function Emp() {
        this.x = new Employee("october", 302, "Marwa", "Mohamed", 20);
        // console.log(this.x.age)
    }
    return Emp;
}());
var Y = /** @class */ (function () {
    function Y(name, address) {
        // console.log(name)
        this.addtess = address;
    }
    return Y;
}());
var userName = new Y('Ahmed Fayez', "nasr city");
console.log(userName);
