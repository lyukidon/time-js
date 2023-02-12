interface Format {
	Y?:number,
	M?:number,
	D?:number,
	H?:number,
	S?:number,
	mark: string[]
}

interface UserForm {
	Y?:number,
	M?:number,
	D?:number,
	H?:number,
	S?:number
}

function userFormat (string : string) : Format{
	const time : string[] = string.match(/[a-zA-z]/g);
	let userForm : any = {};
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