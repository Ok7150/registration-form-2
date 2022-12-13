const validateReset = () =>{
    document.getElementById('first-name').value = '';
    document.getElementById('last-name').value = '';
    document.getElementById('phone-no').value = '';
    document.getElementById('email').value = '';
    document.getElementById('batch-no').value = '';
    document.getElementById('module-no').value = '';
    document.getElementById('tnC').checked = false;

}
const validate = () =>{
    let firstName = document.getElementById('first-name').value
    let lastName = document.getElementById('last-name').value
    let phoneNumber = document.getElementById('phone-no').value
    let email = document.getElementById('email').value
    let batch = document.getElementById('batch-no').value
    let module = document.getElementById('module-no').value
    let tnC = document.getElementById('tnC').checked
    
    let errors = false
    
    // Validations
    // firstname validation
    if(firstName.length>=3){
        document.getElementById('first-name-valid').style.display = 'block';
        document.getElementById('first-name-invalid').style.display = 'none';
    }else{
        document.getElementById('first-name-invalid').style.display = 'block';
        document.getElementById('first-name-valid').style.display = 'none';
        errors = true
    }
    // lastname validation
    if(lastName.length>=3 && firstName!=lastName){
        document.getElementById('last-name-valid').style.display = 'block';
        document.getElementById('last-name-invalid').style.display = 'none';
    }else{
        document.getElementById('last-name-invalid').style.display = 'block';
        document.getElementById('last-name-valid').style.display = 'none';
        errors = true
    }
    // email address validation
    if (
        email &&
        email.includes("@") &&
        email.includes(".") &&
        email.lastIndexOf(".") <= email.length - 3 &&
        email.indexOf('@') !== 0
    ){
        document.getElementById('email-valid').style.display = 'block';
        document.getElementById('email-invalid').style.display = 'none';
    }else{
        document.getElementById('email-invalid').style.display = 'block';
        document.getElementById('email-valid').style.display = 'none';
        errors = true
    }
    // phone number validation
    if(phoneNumber.length ==10 && !isNaN(parseInt(phoneNumber))){
        document.getElementById('phone-valid').style.display = 'block';
        document.getElementById('phone-invalid').style.display = 'none';
    }else{
        document.getElementById('phone-invalid').style.display = 'block';
        document.getElementById('phone-valid').style.display = 'none';
        errors = true
    }
    //Batch validation
    if(batch != 'None' ){
        document.getElementById('batch-valid').style.display = 'block';
        document.getElementById('batch-invalid').style.display = 'none';
    }else{
        document.getElementById('batch-invalid').style.display = 'block';
        document.getElementById('batch-valid').style.display = 'none';
        errors = true
    }
    //Module validation
    if(module!='None'){
        document.getElementById('module-valid').style.display = 'block';
        document.getElementById('module-invalid').style.display = 'none';
    }else{
        document.getElementById('module-invalid').style.display = 'block';
        document.getElementById('module-valid').style.display = 'none';
        errors = true
    }
    //tnC validation
    if(tnC){
        document.getElementById('tnC-invalid').style.display = 'none';
        
    }else{
        document.getElementById('tnC-invalid').style.display = 'block';
        errors = true   
    }

    if(!errors){
        validateReset()
        window.alert("Your details have been saved successfully!")
    }

    
}