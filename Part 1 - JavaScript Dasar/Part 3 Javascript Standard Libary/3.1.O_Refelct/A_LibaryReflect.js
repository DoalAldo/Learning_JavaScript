
//* Learning Reflect

const person ={};
console.log(JSON.stringify(person));

//! untuk mengset value object person
Reflect.set(person,'firstName','Aldo');
Reflect.set(person,'lastName','Gunawan');

console.log(`Logging Manual tanpa menggunakan Reflect \n`);
console.log(JSON.stringify(person));
console.log(person.firstName);
console.log(person.lastName);

console.log(`Logging menggunakan Reflect tanpa mengakses Object lsng\n`);
console.info(Reflect.get(person,'firstName'));
console.info(Reflect.get(person,'lastName'));

console.info(Reflect.has(person,'firstName'));
console.info(Reflect.has(person,'middleName'));
console.info(Reflect.has(person,'lastName'));