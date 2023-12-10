class MathUtil{
  static sum(...numbers){

    if(numbers.length===0)
    {
      throw new Error("Total Param Numbers Harus > dari 0");
    }
    let total =0;
    for (const value of numbers){
      total = total + value;
    }
    return total;
  }
}

const sum = MathUtil.sum(1,2,3,4,5,6,7,8,9,10);
console.info(MathUtil.sum()); // result akan mengthrow error custom
console.info(sum);