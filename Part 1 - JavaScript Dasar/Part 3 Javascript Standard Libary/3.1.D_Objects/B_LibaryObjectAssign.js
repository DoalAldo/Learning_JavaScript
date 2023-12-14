const targetObject ={firstName:"Aldo"};
const sourceObject ={lastName:"Gunawan"};
console.info(`Value Awal targetObject => ${JSON.stringify(targetObject)}`);
console.info(`Value Awal sourceObject => ${JSON.stringify(sourceObject)}`);

Object.assign(targetObject,sourceObject);
console.info(`Value Setelah dilakukan ASSIGN targetObject => ${JSON.stringify(targetObject)}`);