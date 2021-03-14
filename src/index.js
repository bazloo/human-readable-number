const DECIMALS = ['', ' one', ' two', ' three', ' four', ' five', ' six', ' seven', ' eight', ' nine', ' ten'];
const DOZENS = [' ten', ' eleven', ' twelve', ' thirteen', ' fourteen', ' fifteen', ' sixteen', ' seventeen', ' eighteen', ' nineteen', 'twenty'];
const HUNDREDTH = ['', ' ten', ' twenty', ' thirty', ' forty', ' fifty', ' sixty', ' seventy', ' eighty', ' ninety',]
const HUNDRED = ' hundred';
const ZERO =  'zero'

module.exports = function toReadable(number) {
    let readableNumber
    if (number === 0) {
        return ZERO
    }
    if (number <= 10) {
        readableNumber = DECIMALS[number]
    } else if (number > 10 && number <= 20) {
        readableNumber = DOZENS[number - 10]
    } else if (number > 20 && number <= 99) {
        let arrayOfDigits = number.toString().split('');
        let [secondDigit, firstDigit] = [...arrayOfDigits].map(n => parseInt(n));
        readableNumber = HUNDREDTH[secondDigit] + DECIMALS[firstDigit]

    } else if (number > 99) {
        let arrayOfDigits = number.toString().split('');
        let [thirdDigit, secondDigit, firstDigit] = [...arrayOfDigits].map(n => parseInt(n));

        if (secondDigit > 1) {
            readableNumber = DECIMALS[thirdDigit] + HUNDRED + HUNDREDTH[secondDigit] + DECIMALS[firstDigit]
        } else if (secondDigit === 1) {
            readableNumber = DECIMALS[thirdDigit] + HUNDRED + DOZENS[firstDigit]
        } else {
            readableNumber = DECIMALS[thirdDigit] + HUNDRED + HUNDREDTH[secondDigit] + DECIMALS[firstDigit]
        }
    }
    return readableNumber.replace(/^\s/, '')
}




