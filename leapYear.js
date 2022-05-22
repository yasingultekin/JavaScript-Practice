// Write a function that takes the year value as a parameter and calculates whether this year is a leap year and returns the result to the main program with the function-expression() method. NOTE: If the year is exactly divisible by 4 AND (not exactly divisible by 100 OR exactly divisible by 400) it is not a leap year otherwise.


const leapYear = function (year) {
    if (year % 4 == 0 && (year % 100 !==0 || year % 400 == 0)) {
        return `${year} is the leap year.`
    } else {
        return `${year} is not a leap year.`
    }
}

console.log(leapYear(1980)); // 1980 is the leap year. 