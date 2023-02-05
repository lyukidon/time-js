function userFormat (string){
	const time = string.match(/[a-zA-z]/g);
	let userForm = {};
	const mark = string.match(/[^a-zA-z]/g)
	for (let i of time){
		if (userForm[i]){
			userForm = {
				...userForm,
				[i] : userForm[i] + 1
			}
		}else{
			userForm = {
				...userForm,
				[i] : 1
			}
		}
	}
	return {...userForm, mark}
}

export default userFormat;