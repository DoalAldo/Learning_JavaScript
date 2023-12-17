const setNilaiUlangan = new Set();
setNilaiUlangan.add(10);
setNilaiUlangan.add(20);
setNilaiUlangan.add(30);
setNilaiUlangan.add(40);
setNilaiUlangan.add(50);
console.info(`setNilaiUlangan size is => ${setNilaiUlangan.size}`);
console.info(`Apakah setNilaiUlangan ada value 50 => ${setNilaiUlangan.has(50)}`);

setNilaiUlangan.forEach((value)=> console.info(`Value dari set adalah => ${value}`));