// ex) number: format.Y
export const manageStr = (string, number, militaryTime) => {
    if (number <= string.length) {
        if (militaryTime === false) {
            return string;
        }
        else {
            let data = [];
            for (let i = string.length - 1; i > string.length - number - 1; i--) {
                data = [...data, string[i]];
            }
            return data.reverse().join("");
        }
    }
    else {
        console.error("wrong format");
    }
};
// data: array, symbol: array
export const combine = (data, mark) => {
    const cycle = data.length > mark.length ? data.length : mark.length;
    let array = [];
    for (let i = 0; i < cycle; i++) {
        if (data[i]) {
            array = [...array, data[i]];
        }
        if (mark[i]) {
            array = [...array, mark[i]];
        }
    }
    return array.join("");
};
