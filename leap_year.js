function isLeapYear (year) {
    if (year % 4 === 0) {
        return true; 
    } else {
        return false; 
    }
}

const leapYear = isLeapYear(2043); 
console.log(leapYear); 

/*
1. those year that is not divisible by 100, if the year is divisible by 4: then it will be a leap year. 
2. 
*/
function isLeapYear2(year) {
    if (year % 100 !== 0 && year % 4 === 0) {
        return true; 
    } if (year % 100 === 0 && year % 400 === 0) {
        return true; 
    } else {
        return false; 
    }
}

const leapYear1 = isLeapYear2(2100); 
const leapYear2 = isLeapYear2(2400); 
const leapYear3 = isLeapYear2(1900); 
const leapYear4 = isLeapYear2(2052); 
console.log(leapYear1); 
console.log(leapYear2); 
console.log(leapYear3); 
console.log(leapYear4); 
