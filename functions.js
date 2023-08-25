export const capitalize = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
    };

export const reverseString = (string) => {
    return string.split("").reverse().join("");
    };

export const calculator = {
    add: (a, b) => a + b,
    subtract: (a, b) => a - b,
    divide: (a, b) => a / b,
    multiply: (a, b) => a * b,
};

export const caesar = (string, shift) => {
    let result = "";
    for (let i = 0; i < string.length; i++) {
        let char = string[i];
        if (char.match(/[a-z]/i)) {
            let code = string.charCodeAt(i);
            if (code >= 65 && code <= 90) {
                char = String.fromCharCode(((code - 65 + shift) % 26) + 65);
            } else if (code >= 97 && code <= 122) {
                char = String.fromCharCode(((code - 97 + shift) % 26) + 97);
            }
        }
        result += char;
    }
    return result;
}

export const analyzeArray = (array) => {
    let average = array.reduce((a, b) => a + b, 0) / array.length;
    let min = Math.min(...array);
    let max = Math.max(...array);
    let length = array.length;
    let obj = {
        'average': average,
        'min': min,
        'max': max,
        'length': length
    };
    return obj;
}