import userFormat from "./userFormat.js";

const Time = async (form) => {
	let time = [];
    const format = userFormat(form);
    if (format.H) {
        const { hour } = await import("./utils/date.js");
        time = [...time, manageStr(hour() + "", format.H)];
    }
    if (format.M) {
        const { minute } = await import("./utils/date.js");
        time = [...time, manageStr(minute() + "", format.M)];
    }
    if (format.S) {
        const { second } = await import("./utils/date.js");
        time = [...time, manageStr(second() + "", format.S)];
    }
	return combine(time,format.mark);
}

export default Time;