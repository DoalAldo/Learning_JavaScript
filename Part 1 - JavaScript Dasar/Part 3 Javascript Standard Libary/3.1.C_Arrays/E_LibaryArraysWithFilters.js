const arraySource =[1,2,3,4,5,6,7,8,9,10,11,13,14,15,6];

const arrayGanjil=arraySource.filter(value => value%2===1);

const arrayGenap=arraySource.filter(value =>value%2===0);

// console.info ("\n","======================================");
// console.info(`Contoh Menggunakan Filter dengan menghasilkan data Ganjil => `,arrayGanjil);

// console.info ("\n","======================================");
// console.info(`Contoh Menggunakan Filter dengan menghasilkan data Genap => `,arrayGenap);


console.info(arraySource.filter(value => value >6 && value%2===0));