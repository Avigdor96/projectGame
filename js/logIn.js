let users = JSON.parse(localStorage.getItem("users")) || {}
const signUp = () => {
    document.querySelector('signup-form').addEventListener('submit', function(event) {
        event.preventDefault(); 
    let name = document.querySelector("#newUserName").value
    let phone = document.querySelector("#n_phone").value
    let email = document.querySelector("#n_email").value
    let pass = document.querySelector("#n_pass").value
    let users = JSON.parse(localStorage.getItem("users")) || {}
    if (users[name] === pass) {
        alert("משתשמש רשום")
    }
    else {
        let userData = {name, email, phone, pass}
        localStorage.setItem("users", JSON.stringify(userData))
        alert("נרשמת בהצלחה")
        document.querySelector("#signUpFrom").reset()
    }
}
    )}
const logIn = () => {
    document.querySelector('#logInForm').addEventListener('sumbit', function(event){
        event.preventDefault
    let name = document.querySelector("#userName").value
    let pass = document.querySelector("#pass").value
    let users = JSON.parse(localStorage.getItem("users")) || {}
    if (users[name] === pass) {
        alert("ברוך הבא")
        document.querySelector("#logInForm").reset()
    }
    else {
        alert("משתמש לא נמצא נא בצע הרשמה");
        document.querySelector("#logInForm").reset()
    }
})
}
const init = () => {
    document.querySelector("#btn_signUp").addEventListener("click", signUp)
    document.querySelector("#btn_signIn").addEventListener("click", logIn)
}





init()