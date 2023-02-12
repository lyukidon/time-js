import userFormat from "./utils/userFormat.js";
import { manageStr, combine } from "./utils/functions.js";
import { hour, minute, second } from "./utils/dateData.js";

const Time = (form: string, militaryTime?: boolean) => {
    let time: string[] = [];
    const format = userFormat(form);
    if (format.H) {
        if (militaryTime) {
            time = [...time, manageStr(hour(militaryTime) + "", format.H)];
        } else {
            time = [...time, manageStr(hour()+"", format.H)]
        }
    }
    if (format.M) {
        time = [...time, manageStr(minute() + "", format.M)];
    }
    if (format.S) {
        time = [...time, manageStr(second() + "", format.S)];
    }
    return combine(time, format.mark);
};

export default Time;
