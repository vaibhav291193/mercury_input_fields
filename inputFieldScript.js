function validateForm() {
var postalCode = document.form1.toPostalCode;
var postalCodeLen = postalCode.value.length;
document.getElementById("toPostalCode").classList.remove("error");
document.getElementById("toPostalCode").setAttribute("aria-invalid", "false");
document.getElementById("errMsg2").innerHTML = "";

if(postalCodeLen <7) {
document.getElementById("toPostalCode").classList.add("error");
document.getElementById("toPostalCode").setAttribute("aria-invalid", "true");
document.getElementById("errMsg2").innerHTML = "Please enter a valid postal code.";
document.getElementById("toPostalCode").focus();
return false;
}
return true;
}


function maxCharacterLength(textarea) {
        const maxchar = textarea.target.getAttribute('maxLength');

        const maxCharacter = document.getElementById(`${textarea.target.id}-maxCharacter`);
        maxCharacter.innerHTML = `${maxchar} characters left`;

        const len = textarea.target.value.length;
        if (len >= maxchar) {
            maxCharacter.innerHTML = `Maximum characters reached`;
        } else {
            maxCharacter.innerHTML = `${maxchar - len} characters left`;
        }
document.querySelectorAll('textarea').forEach((el) => {
        el.addEventListener('keyup', maxCharacterLength);
    });    
}
    