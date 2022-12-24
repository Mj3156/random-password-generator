const upperSet ="ABCDEFGHIJKLMNOPQRSTUVWXYZ"
const lowerSet = "abcdefghijklmnopqrstuvwxyz"
const numberSet = "0123456789"
const symbolSet = "~`!@#$%^&*()_-+={(}],|:;<>.?;/"
let password = ""

//selectors
const passEl = document.querySelector("#pass-el")
const passQualityEl = document.querySelector("#pass-quality")
const pwLengthEl = document.querySelector("#total-length-input")
const upperEl= document.querySelector("#uppercase-box")
const lowerEl = document.querySelector("#lowercase-box")
const numberEl = document.querySelector("#number-box")
const symbolEl = document.querySelector("#symbol-box")
const generatePassBtn = document.querySelector("#generate-pass-btn")

// for getiing random char
const getRandomeIndex = (dataset)=>{
    return  dataset[Math.floor(Math.random() * dataset.length )]
}

// for generating password acc to length
// function accToLength() {
//     while (password.length !== pwLengthEl.value) {
//         generatePass()
//     }
// }

// for generating passwords acc to guidlines (main fn)

function generatePass() {
    if (upperEl.checked)
    {
        password += getRandomeIndex(upperSet)
    }
    if (lowerEl.checked)
    {
        password += getRandomeIndex(lowerSet)  
        
    }
    if (numberEl.checked)
    {
        password += getRandomeIndex(numberSet)   
        
    }

    if (symbolEl.checked)
    {
        password += getRandomeIndex(symbolSet)  
        
    }
}



// generate password when click on button
generatePassBtn.addEventListener("click", function 
    () {
    generatePass()
    while(password.length < pwLengthEl.value)
    {
        generatePass()
    }

    trimPass()
    passEl.value = password
    console.log(password.length)
    
    
    if (password.length < 7) {
        passQualityEl.textContent = "weak"
    }else if (password.length < 9) {
        passQualityEl.textContent = "good"
    }else if (password.length < 13) {
        passQualityEl.textContent = "strong"
    }else{
        passQualityEl.textContent = "very strong"
    }
    console.log(password)
    password =""
})

// trim the password from the end for equal it to pwlengthel.value
function trimPass() {
    let difference = -(password.length - pwLengthEl.value)
    if (password.length > pwLengthEl.value) {
        password = password.slice(0, difference)
    }
}