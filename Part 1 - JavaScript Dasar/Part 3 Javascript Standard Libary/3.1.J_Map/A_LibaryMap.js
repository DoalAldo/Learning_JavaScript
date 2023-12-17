const mapHuman= new Map();
mapHuman.set("Name","Darmatius Aldo Gunawan");
mapHuman.set("Gender","Male");
mapHuman.set("Addres","Jl. Toko Tiga Seberang No. 3");
mapHuman.set("Work","BCA");

console.info(`mapHuman size is => ${mapHuman.size}`);
console.info(`Apakah mapHuman ada key Gender => ${mapHuman.has("Gender")}`);

// mapHuman.forEach(loggginEachMapValue);

mapHuman.forEach((valueMapHuman,keyMapHuman)=> 

console.info(`Value Of Elemen ${keyMapHuman} => ${valueMapHuman}`)

);

function loggginEachMapValue(valueMapHuman,keyMapHuman,map)
{
  console.info(`Value Of Elemen ${keyMapHuman} => ${valueMapHuman}`);
}

mapHuman.delete("Gender");
mapHuman.forEach(loggginEachMapValue);

mapHuman.clear();
mapHuman.forEach(loggginEachMapValue);

console.info(`=================END============`);
