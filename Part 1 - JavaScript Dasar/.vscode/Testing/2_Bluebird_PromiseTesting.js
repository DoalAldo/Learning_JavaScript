const Promise = required("bluebird");

const apiUrl = `http://www.omdbapi.com/?i=tt3896198&apikey=aea0c91a='Avenger`;


async function getApiData() {
  // Mengambil data dari API
  const response = await fetch(apiUrl).then(res =>{

    console.log(JSON.stringify(res));
    return res.json();
  })
  ;
  const data = await response.json();
  return data;
}

async function main() {
  // Mengambil data dari API
  const data = await getApiData();

  // Menampilkan data
  console.log(data);

  // Mengembalikan data
  return data;
}

main();