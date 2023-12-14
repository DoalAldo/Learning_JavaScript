const source =[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16];

const arrayKali2 = source.map(
  (arraySourceValue,arraySourceIndex)=>
    { 
        console.info(`Value Genap di index : ${arraySourceIndex}, dengan Value Awal : ${arraySourceValue}`);
        return arraySourceValue*2;
    }
);
console.info(`Isi array Kali 2 menggunakan Map adalah => `,arrayKali2);
//! REDUCE akan menggunakan 2 param yaitu result (hasil yang telah di lakukan), dan value 
//! yang dimana value merupakan value dari index yang sekarang di lakukan
//! hasil nya akan menjadi 1
const arrayReduce= source.reduce((result,value) => 
result+value
);

//! REDUCE Right sama kea reduce cuman di lakukan dari sebelah kanan (array index ke n - index ke 0)
//! sedangkan reduce di lakukan dari kiri ke kanan (array index ke 0 - index ke n)
const arrayReduceRight= source.reduce((result,value) => 
result+value
);
console.info(arrayReduce);
console.info(arrayReduceRight);