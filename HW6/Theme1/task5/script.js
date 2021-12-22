let btn = document.getElementById('btnSubmit');

let getForm = (e) => {
    let form = document.forms['mainForm'];
    let name = form.elements['name'].value;
    let serName = form.elements['LastName'].value;
    let tel = form.elements['Number'].value;
    let message = form.elements['Text'].value;
    console.log({
        name,
        serName,
        tel,
        message
    }) 
    e.preventDefault();
}

btn.onclick = getForm;