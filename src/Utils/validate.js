export const checkValid = (email, password) => {
    const checkEmail = /^[\w\-\.]+@([\w-]+\.)+[\w-]{2,}$/gm.test(email?.current?.value)
    const checkPassword = /^((?=\S*?[A-Z])(?=\S*?[a-z])(?=\S*?[0-9]).{6,})\S$/.test(password?.current?.value)
    if (!checkEmail) { return ("Incorrect email format")}
    if (!checkPassword){ return ("Incorrect password format")}
    else {return null}
}