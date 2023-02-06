function userFormat (string){
	const time = string.match(/[a-zA-z]/g);
	let userForm = {};
	const mark = string.match(/[^a-zA-z]/g)
	for (let i of time){
		const _i = i.toUpperCase();
		if (userForm[_i]){
			userForm = {
				...userForm,
				[_i] : userForm[_i] + 1
			}
		}else{
			userForm = {
				...userForm,
				[_i] : 1
			}
		}
	}
	return {...userForm, mark}
}

export default userFormat;