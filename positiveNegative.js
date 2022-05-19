// Write an application that calculates the sum of positive and negative numbers in an array with a For loop. Perform the calculation in a function called add.

const arr = [-5, 15, 22, -4, 45, 78];


function add(arr) {

    let positive  = 0;
    let negative  = 0;
    
    for (let i = 0; i < arr.length; i++) {
        if (i > 0){
            positive  += arr[i];
        } else {
            negative  += arr[i];
        }        
    }
    return positive  + negative;
}

console.log(add(arr));