let val = 33;
console.log(typeof val);
let strVal = String(val);
console.log(strVal);
console.log(typeof strVal);

// "33" => 33
// "33abc" => NaN
// "" => false, "dkjbcw" = true
// true => 1 , false => 0

let strBool = ""
let boolVal = Boolean(strBool)
console.log(boolVal)