const form = document.querySelector('#newUserForm')
const submitBtn = document.querySelector('#createAccountBtn')

const p = document.querySelector('#errorMatch')

// VARS FOR FORM VERIFICATION
const passwordNew = document.querySelector('#userPassword')
const passwordNewConfirm = document.querySelector('#userPasswordConfirm')
const email = document.querySelector('#userEmail')
const firstName = document.querySelector('#userFirstName')
const lastName = document.querySelector('#userLastName')
const phone = document.querySelector('#userPhoneNumber')

submitBtn.addEventListener('click', function(e){
    e.preventDefault()
    saveData()
})

function saveData(){    

    if(passwordNew.value == '' | passwordNewConfirm.value == '' |firstName.value == '' | lastName.value == '' | email.value == '' | phone.value == '' ){
        alert(`Fill the form, please`);
    }else{
        verifyNumber()
        verifyEmail()
        comparePasswords()
        
    }


}


function verifyNumber(){
    const phoneRegex = new RegExp(/[0-9]{10,11}/gm)
    if(phoneRegex.test(phone.value)){
        console.log('nice')
    }else{
        
    }
    
}

function verifyEmail(){
    const emailRegex = new RegExp(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/gm)
    if(emailRegex.test(email.value)){
        console.log(`nice email`)
    }else{
        
    }
}

function comparePasswords(){
    const passRegex= new RegExp(/^(?=.*\d)(?=.*[\u0021-\u002b\u003c-\u0040])(?=.*[A-Z])(?=.*[a-z])\S{8,16}$/gm)

    let pass = passwordNew.value

    if(passRegex.test(pass)){
        console.log('valid password')
        
    }
    if(pass.match(passwordNewConfirm.value)){
        console.log('passwords matches')
        passwordNew.classList.remove('error')
        passwordNewConfirm.classList.remove('error')
        p.classList.add('hidden')
    }else{
        printMessages()
    }
}


function printMessages(){    
    p.classList.remove('hidden')
}

// if(!p.classList.contains('hidden')){
//     p.classList.add('hidden')
// }