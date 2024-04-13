const targetObjPerson ={
  firstName:"Darmatius",
  middleName:"Aldo",
  lastName:"Gunawan"
};

const handler={
  get:function(target,propertyTarget){
    console.log("Inside Proxy Handler GET Function....\n");
    console.log(`with Value Of param propertyTarget is ${propertyTarget} \n`);
    return target[propertyTarget];
  },
  set:function(target,propertyTarget,value){
    console.log("Inside Proxy Handler SET Function....\n");
    console.log(`with Value Of param propertyTarget is ${propertyTarget} \n`);
    console.log(`with Value Of param value is ${value} \n`);
    target[propertyTarget]=value;
  }
};

//! print value targetObj Awal
console.log(targetObjPerson);


const proxy= new Proxy(targetObjPerson,handler);
proxy.workPlace="BCA";
proxy.phoneNum="081260809278";

//! print value targetObj Setelah sudah di set melalui proxy
console.log(targetObjPerson);