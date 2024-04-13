//* Learning encode URI

console.info(`Learning encoded URI \n`);

const url =`http://www.contoh.com/?name=Darmatius Aldo Gunawan`;

console.info(`Data Awal URL yang ExpectedURL :`+ url);

const encodedUrl = encodeURI(url);
console.info(`Hasil Encoded URL :`+ encodedUrl);

const decodedUrl = decodeURI(encodedUrl);
console.info(`Hasil Decoded URL :`+ decodedUrl);

if(url===(decodedUrl))
    {
        console.info(`Hasil url dan decoded URL sama yaitu dengan decodedURL:`+ decodedUrl);
    }


//* Learning encode URI COMPONENT
console.info(`Learning encoded URI COMPONENT \n`);



const urlHeader="https://www.aldo.com/?name=";
const valueURL ="Darmatius&Aldo=Gunawan";

console.info(`Data Awal URL yang ExpectedURL :`+ urlHeader+valueURL +`\n`);

const encodedValueURL=encodeURIComponent(valueURL);
console.info(`Hasil Gabungan urlHeader dengan encodedValueURl adalah : `+urlHeader+encodedValueURL);

const decodedValueURL=decodeURIComponent(encodedValueURL);
console.info(`Hasil Gabungan urlHeader dengan decodedValueURL adalah : `+urlHeader+decodedValueURL);
