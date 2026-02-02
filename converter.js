function inchToFeet(inch) {
    const feet = inch / 12; 
    return feet; 
}

function inchToFeet2(inch) {
    const feetFraction = inch / 12; 
    const feetNumber = parseInt(feetFraction); 
    const inchRemaiing = inch % 12; 
    const result = feetNumber + ' ft ' + inchRemaiing + ' inch. '; 
    return result
}

const shuvoHeight = inchToFeet(75); 
// console.log(shuvoHeight);

const shuvoHeight2 = inchToFeet2(75);
console.log(shuvoHeight2);  





function mileToKilo(mile) {
    const kilo = mile * 1.60934; 
    return kilo; 
}

const mile = mileToKilo(10); 
console.log(mile); 

function kiloToMile(kilo) {
    const mile = kilo /  0.621371; 
    return mile; 
}

const kilo = kiloToMile(10); 
console.log(kilo); 

