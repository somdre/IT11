function highAndLow(numbers){
    numbers = numbers.split(" ")
    console.log(numbers, "lengde:", numbers.length)
    
    let lower = numbers[0];
    let higher = numbers[0];
    for (var i = 0; i < numbers.length; i++) {
      console.log("lower:", lower, "higher:", higher, "numbers:", numbers[i]);
      if (lower > parseInt(numbers[i])) {
        lower = parseInt(numbers[i]);
      } 
      if (higher < parseInt(numbers[i])) {
        higher = parseInt(numbers[i]);
      }
    }
    console.log("lower:", lower, "higher:", higher);
    return lower, higher
}

console.log(highAndLow("1 3 -5 1 5 10 -2"))