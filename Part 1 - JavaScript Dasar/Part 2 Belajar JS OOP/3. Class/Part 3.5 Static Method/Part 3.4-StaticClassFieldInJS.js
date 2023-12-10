class MathUtil{
  static sum(...numbers){
    let total =0;
    for (const value of numbers){
      total = total + value;
    }
    return total;
  }
}

const sum = MathUtil.sum(1,2,3,4,5,6,7,8,9,10);
console.info(sum);