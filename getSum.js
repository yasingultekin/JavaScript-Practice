// Given two integers a and b, which can be positive or negative, find the sum of all the integers between and including them and return it. If the two numbers are equal return a or b.
// Note: a and b are not ordered!


function getSum( a,b )
{
   let x = [];
    if (b > a){
        for (let i = a; i <= b; i++) {
            x.push(i);
    }}
    else {
        for (let i = b; i <= a; i++) {
            x.push(i);
        }}
    let z = x.reduce((t, i) => {return t + i})
    return z;
}