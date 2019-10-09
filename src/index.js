module.exports = function multiply(first, second) {

    if (parseInt(first) == 0 || parseInt(second) == 0) {
        return '0';
    }

    first = first.split('').reverse();
    second = second.split('').reverse();
    let result = [];

    for (let i = 0; i < first.length; i++) {
        for (let j = 0; j < second.length; j++) {

            if (!result[i + j]) {
                result[i + j] = 0;
            }
            let mltpl = first[i] * second[j];
            result[i + j] += mltpl;
        }
    }

    for (let i = 0; i < result.length; i++) {
        if (result[i] >= 10) {
            if (!result[i + 1]) {
                result[i + 1] = 0;
            }
            let digit = result[i] % 10;
            let movingPart = parseInt(result[i] / 10);
            result[i + 1] += movingPart;
            result[i] = digit;
        }
    }

    return result.reverse().join('');
}