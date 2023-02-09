import userFormat from "./utils/userFormat.js";
import { manageStr, combine } from './utils/functions.js'
import { hour, minute, second } from './utils/dateData.js'

const Time = (form) => {
	let time = [];
    const format = userFormat(form);
    if (format.H) {
        // const { hour } = await import("./utils/dateDatßa.js");
        time = [...time, manageStr(hour() + "", format.H)];
    }
    if (format.M) {
        // const { minute } = await import("./utils/dateDßata.js");
        time = [...time, manageStr(minute() + "", format.M)];
    }
    if (format.S) {
        // const { second } = await import("./utils/dateDßata.js");
        time = [...time, manageStr(second() + "", format.S)];
    }
	return combine(time,format.mark);
}

export default Time;