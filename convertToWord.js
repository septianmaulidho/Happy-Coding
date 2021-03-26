const number = 1040424;

console.log(convertToWord(number));

function getWord(index) {
    const numberWord = ['', 'satu', 'dua', 'tiga', 'empat', 'lima', 'enam', 'tujuh', 'delapan', 'sembilan']
    return numberWord[index];
}

function convertToWord(number) {
    let firstNumber;
    if (number < 10) return getWord(number);
    else if (number >= 10 && number < 100) {
        firstNumber = Math.floor(number / 10);
        if (firstNumber === 1) {
            if (number === 10)
                return 'sepuluh';
            else if (number % 10 == 1) return 'sebelas'
            else
                return `${convertToWord(number % 10)} belas`
        }
        return `${getWord(firstNumber)} puluh ${convertToWord(number % 10)}`
    }
    else if (number >= 100 && number < 1000) {
        firstNumber = Math.floor(number / 100);
        if (firstNumber === 1) {
            if (number === 100)
                return 'seratus';
            else
                return `seratus ${convertToWord(number - firstNumber * 100)}`
        }
        return `${getWord(firstNumber)} ratus ${convertToWord(number - firstNumber * 100)}`
    }

    else if (number >= 1000 && number < 10000) {
        firstNumber = Math.floor(number / 1000);
        if (firstNumber === 1) {
            if (number === 1000)
                return 'seribu';
            else
                return `seratus ${convertToWord(number - firstNumber * 1000)}`
        }
        return `${getWord(firstNumber)} ribu ${convertToWord(number - firstNumber * 1000)}`
    }

    else if (number >= 10000 && number < 1000000) {
        return `${convertToWord(Math.floor(number / 1000))} ribu ${convertToWord(number % 1000)}`
    }

    else if (number >= 1000000 && number < 1000000000) {
        let word = `${convertToWord(Math.floor(number / 1000000))} juta `;
        if (number % 1000000)
            word += `${convertToWord(number % 1000000)} ribu `;
        if (number % 1000)
            word += `${convertToWord(number % 1000)}`
        return word;
    }

    else
        return `Angka terlalu besar!`

}