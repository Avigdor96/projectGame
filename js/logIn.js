
let users = JSON.parse(localStorage.getItem("users")) || {}
const signUp = (event) => {
    let users = JSON.parse(localStorage.getItem("users")) || {}
    let name = document.querySelector("#newUserName").value
    let phone = document.querySelector("#n_phone").value
    let email = document.querySelector("#n_email").value
    let pass = document.querySelector("#n_pass").value
    if (users[name]) {
        alert("משתשמש רשום")
        event.preventDefault()
    }
    else if (!name || !phone || !email || !pass) {
        alert("נא למלא את כל השדות")
        event.preventDefault()
    }
    else {
        let userData = { name, email, phone, pass, correct: 0, unCorrect: 0, score: 0 }
        users[name] = userData
        localStorage.setItem("currentUser", name);
        localStorage.setItem("users", JSON.stringify(users))
        document.querySelector("#signUpFrom").reset()
        alert("נרשמת בהצלחה")
        currentUser["currentUser"] = name
        console.log(currentUser);
    }
}
const logIn = (event) => {
    // let users = JSON.parse(localStorage.getItem("users")) || {}
    let name = document.querySelector("#userName").value
    let pass = document.querySelector("#pass").value
    if (users[name]&& users[name].pass === pass) {
        alert("ברוך הבא")
        currentUser["currentUser"] = name
        console.log(currentUser);
        document.querySelector("#logInForm").reset()
        window.location.href = "game.html";
    }
    else {
        alert("משתמש לא נמצא נא בצע הרשמה");
        document.querySelector("#logInForm").reset()
        event.preventDefault()
    }
}
const initLogIn = () => {
    document.querySelector("#btn_signUp").addEventListener("click", signUp)
    document.querySelector("#btn_signIn").addEventListener("click", logIn)
    
    // randQuiz()
    // initGame()
}
// let currentUser = JSON.parse(localStorage.getItem("currentUser")) || {}

initLogIn()
