//*Learing Encoding Text and Decoding Text Into Base 64

const originalValue = "Darmatius Aldo Gunawan";
console.log(`Value Awal : `+ originalValue);

const encodedValue = btoa(originalValue);
console.log(`Hasil encodedValue adalah : `+ encodedValue);

const decodedValue= atob(encodedValue);
console.log(`Hasil decodedValue adalah : `+ decodedValue);