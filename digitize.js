// Convert number to reversed array of digits
// Given a random non-negative number, you have to return the digits of this number within an array in reverse order.

// Example:
// 348597 => [7,9,5,8,4,3]
// 0 => [0]





function digitize(n) {
    let a = n.toString().split("");
    let x = [];
  
    for (let i = 0; i < a.length; i++) {
      x.push(Number(a[i]));    
  }
    return x.reverse();
  }