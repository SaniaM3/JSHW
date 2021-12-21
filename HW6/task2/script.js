let form = document.forms[0];
let btn = document.mainForm.btnSubmit;
let inputVal = document.mainForm.inputVal;

function randomFunc (){ 
    const max = 100;
    return Math.round(Math.random() * max );
   }

btn.onclick = function() {
    inputVal.value = randomFunc ();
    return false;
}
