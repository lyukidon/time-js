// ex) number: format.Y
const manageStr = (string, number) => {
	if (number <= string.length){

		let data = [];
		for (let i = string.length - 1; i > string.length - number - 1; i--) {
			data = [...data, string[i]];
		}
		return data.reverse().join("");
	}else{
		console.error('wrong format')
	}
};

// data: array, symbol: array
const combine = (data, mark) => {
	return data[0]+mark[0]+data[1]+mark[1]+data[2]
}