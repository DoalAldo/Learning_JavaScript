const person={};

person[Symbol.for("firstName")] ="Aldo";
person[Symbol.for("lastName")]="Gunawan";

console.log(person);
console.log(person[Symbol.for("firstName")]);
console.log(person[Symbol.for("lastName")]);
