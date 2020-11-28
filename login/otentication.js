const loginForm = document.getElementById("login-form");
const loginButton = document.getElementById("login-form-submit");
const loginError = document.getElementById("login-error-msg");
const backToLogin = document.getElementById("back");
const backHome = document.getElementById("back-home");

if (loginButton) {
    loginButton.addEventListener("click", (e) => {
        e.preventDefault();
        const username = loginForm.username.value;
        const password = loginForm.password.value;
    
        if (username === 'admin' && password === 'P@ssw0rd') {
            alert("Login Success");
            const link = document.createElement('a');
            link.href = 'login-success/login-success.html';
            link.click();
        } else {
            alert("Login Failed");
            loginError.innerHTML = 'Account Not Valid'
        }
    })
}
if (backHome) {
    backHome.addEventListener("click", (e) => {
        e.preventDefault();
        const link = document.createElement('a');
        link.href = '../index.html';
        link.click();
    })
}
if (backToLogin) {
    backToLogin.addEventListener("click", (e) => {
        e.preventDefault();
        const link = document.createElement('a');
        link.href = '../login.html';
        link.click();
    })
}