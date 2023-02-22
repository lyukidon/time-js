function userFormat(string) {
    const time = string.match(/[a-zA-z]/g);
    let userForm = {};
    const mark = string.match(/[^a-zA-z]/g);
    for (let i of time) {
        const _i = i.toUpperCase();
        if (userForm[_i]) {
            userForm = Object.assign(Object.assign({}, userForm), { [_i]: userForm[_i] + 1 });
        }
        else {
            userForm = Object.assign(Object.assign({}, userForm), { [_i]: 1 });
        }
    }
    return Object.assign(Object.assign({}, userForm), { mark });
}
export default userFormat;
