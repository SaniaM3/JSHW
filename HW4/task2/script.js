let arr = ['Victor', 'Tatiana', 'Eduard', 'Michael', 'Denis', 'Peter', 'Ann', 'Dmitry', 'Sergey', 'Ivan', 'Alan'];


let list = document.createElement('ol');
    for (let i = 0; i < arr.length; i++) {
        let li = document.createElement('li');
        li.innerText = arr[i];
        if (i % 2 === 0) {
            li.className = 'even';
            li.style.backgroundColor = 'green';
            list.append(li);
        }
        else 
        {
            li.className = 'odd';
            li.style.backgroundColor = 'blue';
            list.append(li);
        }
    }

    document.body.append(list);