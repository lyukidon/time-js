function format (string){
	const timeData = string.match(/[a-zA-z]/g);
	let timeFormat = {};
	const mark = string.match(/[^a-zA-z]/g)
	for (let i of timeData){
		if (timeFormat[i]){
			timeFormat = {
				...timeFormat,
				[i] : timeFormat[i] + 1
			}
		}else{
			timeFormat = {
				...timeFormat,
				[i] : 1
			}
		}
	}
	return {...timeFormat, mark}
}

export default format;