let list = document.createElement("ul");
document.body.append(list);

let numPaste = prompt("Введите число:");
console.log(numPaste);

while (!!numPaste && !isNaN(numPaste)) {
    numPaste = Number(numPaste);
    let lis = [...document.getElementsByTagName("li")];
    let li = document.createElement("li");
    if (lis.length === 0) {
        li.innerText = numPaste;
    } else {
        let values = lis.map((li) => Number(li.innerText));
        let summ = numPaste;
        for (let i = 0; i < values.length; i++) {
            summ += values[i];
        }
        li.innerText = summ;
    }
    list.append(li);
    numPaste = prompt("Введите число:");
}