/*Write a function leapYear(year) that returns true if the year is a leap year, false otherwise. The rules for leap years are:

only applies to years since 1582, throw an error for anything else
if a year is divisible by 4 then it is a leap year
except years divisible by 100, those are not leap years
except years divisible by 400, those are leap years*/

function leapYear(year) {
    if (year < 1582) {
        throw new Error('Leap year rules do not work before 1582');
    } else if (year % 400 === 0) {
        return true;
    } else if (year % 100 === 0) {
        return false;
    } else if (year % 4 === 0) {
        return true;
    } else {
        return false;
    }
}

/*function leapYear(year) {
    if(year < 1582) {
        throw new Error('Leap year rules do not work before 1582');
    }
    const div400 = year % 400 === 0;
    const div100 = year % 100 === 0;
    const div4 = year % 4 === 0;
    return div400 || (div4 && !div100);
}*/


export default leapYear;