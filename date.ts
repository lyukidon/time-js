import userFormat from "./utils/userFormat.js";
import { manageStr, combine } from './utils/functions.js'
import {year, month, day} from './utils/dateData.js'

const Date = (form : string) => {
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

export default Date;