
let btn = document.getElementById('btnSubmit');

let viewFocus = (e) => {
    let label = document.getElementById('inputOne');
    if (label.value === '') {
        label.focus()
    }
    e.preventDefault();
}

btn.onclick = viewFocus;
