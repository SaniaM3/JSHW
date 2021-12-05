function aboutMe(lastName, firstName, middleName) {
    this.lastName = lastName;
    this.firstName = firstName;
    this.middleName = middleName;
  }
  
  let me = new aboutMe("Масько", "Александр", "Александрович");
  
  console.table(me);



const bodyElement = document.body;
const firstChildNode = document.querySelectorAll('li');
console.log(bodyElement);
console.log(firstChildNode);