module.exports = function toReadable(number) {
    const numbs = {
        0: "zero",
        1: "one",
        2: "two",
        3: "three",
        4: "four",
        5: "five",
        6: "six",
        7: "seven",
        8: "eight",
        9: "nine",
        10: "ten",
        11: "eleven",
        12: "twelve",
        13: "thirteen",
        14: "fourteen",
        15: "fifteen",
        16: "sixteen",
        17: "seventeen",
        18: "eighteen",
        19: "nineteen",
        20: "twenty",
        30: "thirty",
        40: "forty",
        50: "fifty",
        60: "sixty",
        70: "seventy",
        80: "eighty",
        90: "ninety",
        100: "hundred",
    };

    let hundreds = numbs[Math.trunc(number / 100)];
    let dozens = numbs[Math.trunc((number % 100) / 10) * 10];
    let units = numbs[number % 10];
    if (number <= 20) {
        return numbs[number];
    }
    if (number > 20 && number < 100) {
        if (number % 10 === 0) {
            return `${dozens}`;
        }
        return `${dozens} ${units}`;
    }
    if (number >= 100) {
        if (number % 100 === 0) {
            return `${hundreds} ${numbs[100]}`;
        }
        if (dozens === "zero") {
            return `${hundreds} ${numbs[100]} ${units}`;
        }
        if (dozens === "ten") {
            return `${hundreds} ${numbs[100]} ${numbs[number % 100]}`;
        }
        if (units === "zero") {
            return `${hundreds} ${numbs[100]} ${dozens}`;
        } else {
            return `${hundreds} ${numbs[100]} ${dozens} ${units}`;
        }
    }
};
