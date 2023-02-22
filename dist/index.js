import userFormat from "./utils/userFormat.js";
import { manageStr, combine } from './utils/functions.js';
import { year, month, day } from './utils/dateData.js';
import { hour, minute, second } from "./utils/dateData.js";
export const Time = (form, militaryTime) => {
    let time = [];
    const format = userFormat(form);
    if (format.H) {
        if (militaryTime) {
            time = [...time, manageStr(hour(militaryTime) + "", format.H)];
        }
        else {
            time = [...time, manageStr(hour() + "", format.H)];
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
export const Date = (form) => {
    let date = [];
    const format = userFormat(form);
    if (format.Y) {
        date = [...date, manageStr(year() + "", format.Y)];
    }
    if (format.M) {
        date = [...date, manageStr(month() + "", format.M)];
    }
    if (format.D) {
        date = [...date, manageStr(day() + "", format.D)];
    }
    return combine(date, format.mark);
};
