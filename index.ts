import userFormat from "./utils/userFormat.js";
import { manageStr, combine } from './utils/functions.js'
import {year, month, day} from './utils/dateData.js'
import { hour, minute, second } from "./utils/dateData.js";

export const Time = (form: string, militaryTime?: boolean) => {
    let time: string[] = [];
    const format = userFormat(form);
    if (format.H) {
        time = [...time, manageStr(hour(militaryTime) + "", format.H, militaryTime)];
    }
    if (format.M) {
        time = [...time, manageStr(minute() + "", format.M)];
    }
    if (format.S) {
        time = [...time, manageStr(second() + "", format.S)];
    }
    return combine(time, format.mark);
};


export const Date = (form : string) => {
    let date : string[] = [];
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
	return combine(date,format.mark);
};

console.log(Time('hh:mm', false))