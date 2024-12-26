

// let obj = {
//     name : "Nouran",
//     address : "nasr city",
//     getAge:function(){
//         return 30
//     }
// }

////// closure

// let func = (name , address)=>{
//     return {
//         name : name,
//         address : address,
//         getAge:function(age){
//             return age
//         }
//     }
// }

// console.log(func('zain' , 'maadi' , 10))
// console.log(func('tamer' , 'october' , 40))


///// callBack Func

let arr = [2, 4, 6]
arr.forEach((item, index, arr) => {

})

let setFunc = (num, cb) => {
    setTimeout(() => {
        if (num > 20) cb("num is greater than 20", true)
        else cb('num is less than 20', false)
    }, 3000);

}
// console.log(setFunc(30))

// setFunc(10 , (result ,flag )=>{
//     console.log(result , flag)
// } )

// let date = new Date()

/// promise ==> res , rej
// const myPromise = (val) => {
//     return new Promise((res, rej) => {
//         setTimeout(() => {
//             if (typeof val == "number") res(val * 2)
//             else rej('not a number')
//         }, 3000)
//     })
// }

/// then catch , asyn await

// console.log(myPromise(10))

/// then catch 

// myPromise("fghjkj").then((data)=>{
//     console.log(data)
// })
// .catch((e)=>{
//     console.log(e)
// })


/// asyn await + try catch (error handling)

// try {

//     console.log('js')
//     console.log(fName)

// }
// catch {
//     console.log('there an error')
// }

// console.log('html')
// console.log('css')
// console.log('js')


/// async await + try catch (error handling)

// const myPromise = (val) => {
//     return new Promise((res, rej) => {
//         setTimeout(() => {
//             if (typeof val == "number") res(val * 2)
//             else rej('not a number')
//         }, 3000)
//     })
// }


// const handlingPromise = async ()=>{
//     try{
//         data = await myPromise(10)
//         data2 = await myPromise(40)
//         console.log(data)
//         console.log(data2)
//     }
//     catch(e){
//         console.log(e)
//     }
// }

// handlingPromise()



let userApi = async (cb)=>{
    try{
        let data = await fetch('https://jsonplaceholder.typicode.com/users')
    
        let returnedData = await data.json()
        
        cb(returnedData)
        console.log(data)
        console.log(returnedData)

    }
    catch(e){
        console.log(e)
    }

}

userApi((data)=>{
    console.log(data)
})





