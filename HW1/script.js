'use strict';

// Задание 1

let oneVariable = 11;
let twoVariable = 5;
console.log("Первая переменная: " + oneVariable, "Вторая переменная: " + twoVariable);

[oneVariable, twoVariable] = [twoVariable, oneVariable];
console.log("Первая переменная: "+ oneVariable, "Вторая переменная: " + twoVariable);

// Задание 2

const a = [1,2,3,4,5,6,7,8,9,10];
const b = a[0] + a[5] + a[6];
console.log(b);

// Задание 3

function myFunc() {
    let oneVariable = 11;
    let twoVariable = 5;
        console.log("Первая переменная: " + oneVariable, "Вторая переменная: " + twoVariable);

    [oneVariable, twoVariable] = [twoVariable, oneVariable];
        console.log("Первая переменная: "+ oneVariable, "Вторая переменная: " + twoVariable);


        let myObj = {     
            oneVariable: oneVariable,  
            twoVariable:  twoVariable,
            sum: b,      
          };

        console.log(myObj);
}

myFunc();