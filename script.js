const form = document.querySelector('#newUserForm')
const submitBtn = document.querySelector('#createAccountBtn')


submitBtn.addEventListener('click', function(e){
    e.preventDefault()
    saveData()
})

function saveData(){    
    const passwordNew = document.querySelector('#userPassword').value
    const passwordNewConfirm = document.querySelector('#userPasswordConfirm').value


    console.log(`password: ${passwordNew}, confirmation: ${passwordNewConfirm}`)

}



