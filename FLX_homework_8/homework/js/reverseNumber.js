// Method 1
const reverseNumber = num => {
    const numStr = num.toString();
    let newNum = '';
    if (numStr[0] !== '-') {
        for (let i = numStr.length - 1; i >= 0; i--) {
            newNum = newNum.concat(numStr[i]);
        }
    } else if (numStr[0] === '-') {
        newNum = newNum.concat('-');
        for (let i = numStr.length - 1; i >= 1; i--) {
            newNum = newNum.concat(numStr[i]);
        }
    }
    return parseInt(newNum);
}
reverseNumber(-456);

// Method 2
/* const reverseNumberr = num => {
    const strNum = num.toString();
    const reversed = parseInt(strNum.split('').reverse().join(''));
    return strNum[0] === '-' ? -reversed : reversed;
}
reverseNumberr(-456);
*/