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
//! SHIFT tujuan nya untuk mengeluarkan value array dari paling depan array (index ke 0)
//! SHIFT using Method of (FIFO - First In First Out)
console.info(` Using Shift - 1 with value ${queue.shift()}`);
queue.forEach(
  (valueArray,indexArray) => console.info(`The Length Of Array Queue is : ${queue.length}, With Value ${valueArray}, on Index ${indexArray}`)
);

console.info ("++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++");
console.info(` Using Shift - 2 with value ${queue.shift()}`);
queue.forEach(
  (valueArray,indexArray) => console.info(`The Length Of Array Queue is : ${queue.length}, With Value ${valueArray}, on Index ${indexArray}`)
);

console.info ("++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++");
console.info(` Using Shift - 3 with value ${queue.shift()}`);
console.info(`The Length Of Array Queue is : ${queue.length}`);

