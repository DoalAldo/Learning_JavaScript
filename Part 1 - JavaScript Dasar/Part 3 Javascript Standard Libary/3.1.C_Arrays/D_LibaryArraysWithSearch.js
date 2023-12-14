const arraySource =[1,2,3,4,5,6,7,8,9,10,11,13,14,15,6,12,14];

const arrayName= ["Darmatius","Aldo","Gunawan"];

const valueFind=arraySource.find(findValue=> findValue>6);
//! kalau findValue>6 akan lsng di kirimkan value nya ke variable valueFind dan kalau tidak ada di temukan akan menghasilkan undefind
console.info ("\n","======================================");
console.info(`Contoh Menggunakan array.find() =>`,valueFind);

const valueFindIndex = arraySource.findIndex(value => value % 2 === 0);
console.info ("\n","======================================");
console.info(`Contoh Menggunakan Find Index => `,valueFindIndex);

const valueIncludes= arraySource.includes(12);
const valueIncludesString= arrayName.includes("Gunawan");
console.info ("\n","======================================");
console.info(`Contoh Menggunakan Includes pada array numbers => `,valueIncludes);
console.info(`Contoh Menggunakan Includes pada array string => `,valueIncludesString);

const valueIndexOf = arrayName.indexOf("Aldo");
console.info ("\n","======================================");
console.info(`Contoh Menggunakan indexof => `,valueIndexOf);

const valueLastIndexOf = arraySource.lastIndexOf(6);
console.info ("\n","======================================");
console.info(`Contoh Menggunakan last indexof => `,valueLastIndexOf);