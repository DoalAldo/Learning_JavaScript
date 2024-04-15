export const firstName ="Darmatius";
export const middleName ="Aldo";
export const lastName ="Gunawan";


export function Hello(name){
    console.log(`Hello, `+name, `My Name is ${firstName + middleName + lastName} \n`);
}


export class Person{
    constructor(name){
        this.name = name;
    }

    sayHello(name){
        console.log(`Hello ${name}, My name is ${this.name} \n`);
    }
}