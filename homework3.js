function pow(base, exponent) {
  if (exponent === 0) return 1; 

  let result = 1;

  if (exponent > 0) {
    for (let i = 0; i < exponent; i++) {
      result *= base; 
    }
  } else {
    for (let i = 0; i < -exponent; i++) {
      result *= base; 
    }
    result = 1 / result; 
  }

  return result;
}
console.log(pow(2, 3));
