class Counter{
  constructor(){
    this.value=1;
  }
  
  next(){
    try{
      return this.value;
    }
    finally{
      this.value++;
    }
  }
}

const counter= new Counter();
console.info(counter.next()); // will return 1
console.info(counter.next()); // will return 2
console.info(counter.next()); // will return 3
console.info(counter.next()); // will return 4
console.info(counter.next()); // will return 5
console.info(counter.next()); // will return 6