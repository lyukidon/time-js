import userFormat from "./utils/userFormat.js";
import { manageStr, combine } from './utils/functions.js'

const Date = async (form) => {
    let date = [];
    const format = userFormat(form);
    if (format.Y) {
        const { year } = await import("./utils/dateData.ts");
        date = [...date, manageStr(year() + "", format.Y)];
    }
    if (format.M) {
        const { month } = await import("./utils/dateData.ts");
        date = [...date, manageStr(month() + "", format.M)];
    }
    if (format.D) {
        const { day } = await import("./utils/dateData.ts");
        date = [...date, manageStr(day() + "", format.D)];
    }
	return combine(date,format.mark);
};

export default Date;