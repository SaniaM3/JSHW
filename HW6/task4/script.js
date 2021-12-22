let form = document.forms[0];
let label = form.elements['inputOne'];
let btn = form.elements['btnSubmit'];

let viewFocus = function(){
    if (label.value === '') {
        label.focus()
    }
}
viewFocus();