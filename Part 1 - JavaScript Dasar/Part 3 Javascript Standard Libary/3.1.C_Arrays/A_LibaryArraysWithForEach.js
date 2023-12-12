const arrayName= ["Darmatius","Aldo","Gunawan"];

//! Contoh For Each Menggunakan Function biasa dengan parameter method nya value dan index
//* param value merupakan value dari masing" index di dalam array
//* param index merupakan posisi dari masing" value di dalam array

arrayName.forEach(
    function (value,index) {
    console.info(`Value of index ${index} is => ${value}`);
  }
)

//! Contoh For Each Menggunakan Function simple dengan parameter method nya value dan index
arrayName.forEach(
  (value,index) => console.info(`Value of index ${index} is => ${value}`)
  );

//! Contoh For Each Menggunakan Function simple dengan parameter method nya value 
arrayName.forEach(
  value => console.info(`Value of array is => ${value}`)
);