const person={
  firstName:"Darmatius",
  middleName:"Gunawan",
  lastName:"Gunawan",
  address:{
    country:"Indonesia",
    city:"Jakarta",
    street :"jln. Toko Tiga Seberang No 3"
  }
}
//! STRINGIFY => CONVERT JSON to STRING
const jsonValue = JSON.stringify(person);
//! parse ==> CONVERT String JSON ke Bentuk JSON
const personAgain = JSON.parse(jsonValue);
console.info(`Contoh JSON Value => `,jsonValue);
console.info(`Contoh person again value => `,personAgain);