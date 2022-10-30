validate = (allCorrect = false) => {
    // console.log('working')
    let firstName = document.getElementById('first-name').value
    let lastName = document.getElementById('last-name').value
    let eMail = document.getElementById('email').value
    let phone = document.getElementById('phone').value
    let gender = document.getElementsByName('radio')
    let country = document.getElementById('user-country').value
    let error = false

    // first name
    firstName = firstName.replaceAll(" ","")
    if (firstName.length >= 3) {
        document.getElementById('first-name-valid').style.display = 'block'
        document.getElementById('first-name-invalid').style.display = 'none'
    } else {
        document.getElementById('first-name-valid').style.display = 'none'
        document.getElementById('first-name-invalid').style.display = 'block'
        error = true
    }

    // last name
    lastName = lastName.replaceAll(" ","")
    if (lastName.length >= 3) {
        document.getElementById('last-name-valid').style.display = 'block'
        document.getElementById('last-name-invalid').style.display = 'none'
    } else {
        document.getElementById('last-name-valid').style.display = 'none'
        document.getElementById('last-name-invalid').style.display = 'block'
        error = true
    }

    // e mail
    let dot = eMail.lastIndexOf('.')
    let domain = eMail.slice(dot+1)
    if (
    eMail!=="" &&
    eMail.indexOf('@') != 0 &&
    eMail.includes('@') && 
    eMail.includes('.') && 
    1<domain.length && 
    domain.length<4 ) {
        document.getElementById('email-valid').style.display = 'block'
        document.getElementById('email-invalid').style.display = 'none'
    } else {
        document.getElementById('email-valid').style.display = 'none'
        document.getElementById('email-invalid').style.display = 'block'
        error = true
    }

    // phone number
    let validNum = parseInt(phone)
    if (phone.length == 10 && !isNaN(validNum)) {
        document.getElementById('phone-valid').style.display = 'block'
        document.getElementById('phone-invalid').style.display = 'none'
    } else {
        document.getElementById('phone-valid').style.display = 'none'
        document.getElementById('phone-invalid').style.display = 'block'
        error = true
    }

    // gender
    if (gender[0].checked || gender[1].checked || gender[2].checked) {
        document.getElementById('gender-invalid').style.display = 'none'
        document.getElementById('gender-valid').style.display = 'block'
    } else {

        document.getElementById('gender-valid').style.display = 'none'
        document.getElementById('gender-invalid').style.display = 'block'
        error = true
    }

    // country
    if (country != 'none') {
        document.getElementById('country-invalid').style.display = 'none'
        document.getElementById('country-valid').style.display = 'block'
    } else {
        document.getElementById('country-valid').style.display = 'none'
        document.getElementById('country-invalid').style.display = 'block'
        error = true
    }
    // console.log(`${firstName} , ${lastName}`)

    if(!error && allCorrect){
        alert('Your details have been saved successfully!')
        document.getElementById('registration-form').reset()

        let invalidInputs = document.getElementsByClassName('valid-feedback')
        for(let i=0;i<invalidInputs.length;i++){
            invalidInputs[i].style.display = 'none'
        }
    }
}
