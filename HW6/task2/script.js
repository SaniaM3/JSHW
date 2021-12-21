let btn = document.mainForm.btnSubmit;
let inputVal = document.mainForm.inputVal.value;

function randomFunc (){ 
    const max = 100;
    return Math.round(Math.random() * max );
   }

btn.onclick = function() {
    inputVal.innerHTML = randomFunc ();
    return false;
}
