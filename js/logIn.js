// let users = JSON.parse(localStorage.getItem("users")) || {}
const signUp = () => {
    let users = JSON.parse(localStorage.getItem("users")) || {}
    let name = document.querySelector("#newUserName").value
    let phone = document.querySelector("#n_phone").value
    let email = document.querySelector("#n_email").value
    let pass = document.querySelector("#n_pass").value
    
    if (users[name]) {
        alert("משתשמש רשום")
    }
    else if(!name || !phone || !email || !pass){
        alert("נא למלא את כל השדות")
    }
    else {
        let userData = {name, email, phone, pass}
        users[name] = userData
        localStorage.setItem("users", JSON.stringify(users))
        document.querySelector("#signUpFrom").reset()
        alert("נרשמת בהצלחה")
    }
}
const logIn = () => {
    let users = JSON.parse(localStorage.getItem("users")) || {}
    let name = document.querySelector("#userName").value
    let pass = document.querySelector("#pass").value
    if (users[name]
        
        
        
         && users[name].pass === pass) {
        alert("ברוך הבא")
        document.querySelector("#logInForm").reset()
    }
    else {
        alert("משתמש לא נמצא נא בצע הרשמה");
        document.querySelector("#logInForm").reset()
    }
}
const init = () => {
    document.querySelector("#btn_signUp").addEventListener("click", signUp)
    document.querySelector("#btn_signIn").addEventListener("click", logIn)
}





init()