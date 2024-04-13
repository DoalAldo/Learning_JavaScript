const person={
  firstName : "Aldo",
  lastName : "Gunawan",
  city:"JAKARTA"
};

console.info(`Value Person Awal  => ${JSON.stringify(person)}`);

/*
  ! DIMANA Properties value nya tidak bisa di ganti
  ! yang berarti value firstName akan tetap Aldo
  ! dan value lastName akan tetap Gunawan
  ! walaupun ada proses yang akan dilakukan untuk menganti value dari properties nya
*/

//* melakukan Proses Freeze Object
Object.freeze(person);
//* mengubah value properties firstname menjadi BAMBANG
person.firstName="BAMBANG";
console.info(`Value Person Setelah di Freeze dan coba di ubah value firstName nya menjadi BAMBANG  => ${JSON.stringify(person)}`);


const person2={
  firstName : "Darmatius",
  middleName:"Aldo",
  lastName : "Gunawan"
};

console.info(`Value Person2 Awal  => ${JSON.stringify(person2)}`);

//* melakukan Proses SEAL Object
Object.seal(person2);

//* mengubah value properties firstname menjadi BAMBANG
person2.firstName="BAMBANG";
console.info(`Value Person2 Setelah di SEAL dan coba di ubah value firstName nya menjadi BAMBANG  => ${JSON.stringify(person2)}`);

//* mencoba delete value properties firstname 
delete person2.firstName;
console.info(`Value Person2 Setelah di delete value firstName nya => ${JSON.stringify(person)}`);
