// ex) number: format.Y
export const manageStr = (
    string: string,
    number: number,
    militaryTime?: boolean | undefined
): string | undefined => {
    if (number <= string.length) {
        if (militaryTime === false) {
            return string;
        } else {
            let data: string[] = [];
            for (
                let i = string.length - 1;
                i > string.length - number - 1;
                i--
            ) {
                data = [...data, string[i]];
            }
            return data.reverse().join("");
        }
    } else {
        console.error("wrong format");
    }
};

// data: array, symbol: array
export const combine = (data: string[], mark: string[]): string => {
    const cycle: number = data.length > mark.length ? data.length : mark.length;
    let array: string[] = [];
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
