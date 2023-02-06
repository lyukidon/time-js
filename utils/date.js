import userFormat from "./userFormat.js";

const Date = async (form) => {
    let date = [];
    const format = userFormat(form);
    if (format.Y) {
        const { year } = await import("./utils/dateData.js");
        date = [...date, manageStr(year() + "", format.Y)];
    }
    if (format.M) {
        const { month } = await import("./utils/dateData.js");
        date = [...date, manageStr(month() + "", format.M)];
    }
    if (format.D) {
        const { day } = await import("./utils/dateData.js");
        date = [...date, manageStr(day() + "", format.D)];
    }
	console.log(combine(date,format.mark))
	return combine(date,format.mark);
};

export default Date;