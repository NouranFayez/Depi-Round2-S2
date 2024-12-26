let form = document.getElementById('myForm')


let nameValidation = (element) => {
    // console.log(element.value)
    var inputValue = element.value.trim()
    // console.log(inputValue.length)
    if (inputValue.length < 3) {
        handleError(element, "enter at least 3 character")
        // element.nextElementSibling.innerText = "enter at least 3 character"
    }
    else handleError(element)

    // isNAN()
}

let emailValidation = (element) => {
    console.log(element.value)
    let inputValue = element.value
    // email format userName@domain.subdomain
    // nouran@hotmail.com
    // regular Expression
    let regExp = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    console.log(regExp.test(inputValue));
    (regExp.test(inputValue)) ? handleError(element) : handleError(element , 'please enter a valid email')

}

let handleError = (input, msg = "") => {
    input.nextElementSibling.innerText = msg
}

form.addEventListener('input', function (e) {
    // console.log(e.target.id)

    if (e.target.id == 'userName') {
        nameValidation(e.target)
    }

    else if (e.target.id == 'useremail') {
        emailValidation(e.target)
    }
    else if (e.target.id == 'userPassword') {
//         let regex = 
// /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@.#$!%*?&])[A-Za-z\d@.#$!%*?&]{8,15}$/;

    }
})


form.addEventListener('submit', function (e) {
    e.preventDefault()
    console.log('eeeee')
})