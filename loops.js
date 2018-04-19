function forLoop(array) {
  for (let i = 0; i < 25; i++) {
    if (i === 1) {
      array.push("I am 1 strange loop.")
    } else {
      array.push("I am ${i} strange loop${i === 0 ? '' : 's'}.");
    }
  }  
  return array;
}

var n = 5;

function whileLoop(n) {
  let countdown = n;
  
  while(countdown > 0) {
    console.log(countdown--);
  }
 }