const unixTimestamp = Date.now();
console.info(unixTimestamp);
const dateUnix = new Date(unixTimestamp);
console.info(dateUnix);

console.info(dateUnix.getTime());