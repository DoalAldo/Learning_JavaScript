const firstName =Symbol();
const lastName=Symbol();

const person={};

person[firstName]="Aldo";
person[lastName]="Gunawan";


console.info(person);
console.info(person[firstName]);
console.info(person[lastName]);
