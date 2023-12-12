const queue=[];
//! PUSH method is to insert value to array from behind 
queue.push("Darmatius");
queue.forEach(
  (valueArray,indexArray) => console.info(`The Length Of Array Queue is : ${queue.length}, With Value ${valueArray}, on Index ${indexArray}`)
);

queue.push("Aldo");
queue.forEach(
  (valueArray,indexArray) => console.info(`The Length Of Array Queue is : ${queue.length}, With Value ${valueArray}, on Index ${indexArray}`)
);

queue.push("Gunawan");
queue.forEach(
  (valueArray,indexArray) => console.info(`The Length Of Array Queue is : ${queue.length}, With Value ${valueArray}, on Index ${indexArray}`)
);

console.info ("========================================================");
//! POP tujuan nya untuk mengeluarkan value array dari paling BELAKANG array (index ke - array.length)
//! pop using Method of (LIFO - Last In First Out)
console.info(` Using pop - 1 with value ${queue.pop()}`);
console.info(`The Length Of Array Queue is : ${queue.length}`);
queue.forEach(
  (valueArray,indexArray) => console.info(`The Length Of Array Queue is : ${queue.length}, With Value ${valueArray}, on Index ${indexArray}`)
);

console.info ("++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++");
console.info(` Using pop - 2 with value ${queue.pop()}`);
console.info(`The Length Of Array Queue is : ${queue.length}`);
queue.forEach(
  (valueArray,indexArray) => console.info(`The Length Of Array Queue is : ${queue.length}, With Value ${valueArray}, on Index ${indexArray}`)
);

console.info ("++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++");
console.info(` Using pop - 3 with value ${queue.pop()}`);
console.info(`The Length Of Array Queue is : ${queue.length}`);

