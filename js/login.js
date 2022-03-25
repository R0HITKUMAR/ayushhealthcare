//--------------------------------------------------Start of Login Function --------------------------------------------------//

// Form Setup
document.getElementById("loginForm").addEventListener("submit", (event) => {
    event.preventDefault()
})

document.getElementById("forgetPassForm").addEventListener("submit", (event) => {
    event.preventDefault()
})

// Password View Toggle
const ltogglePassword = document.querySelector('#togglePassword');
const lpassword = document.querySelector('#lpassword');

ltogglePassword.addEventListener('click', function (e) {
    const type = lpassword.getAttribute('type') === 'password' ? 'text' : 'password';
    lpassword.setAttribute('type', type);
    this.classList.toggle('fa-eye-slash');
});

// Show Forget Password Form
function forgotPass() {
    document.getElementById("loginformAlert").innerHTML = "";
    document.getElementById("formtitle").innerHTML = "Forgot Password";
    document.getElementById("loginForm").classList.add("d-none");
    document.getElementById("forgetPassForm").classList.remove("d-none");
}

// Show Login Form
function backToLogin() {
    document.getElementById("loginformAlert").innerHTML = "";
    document.getElementById("formtitle").innerHTML = "Login";
    document.getElementById("loginForm").classList.remove("d-none");
    document.getElementById("forgetPassForm").classList.add("d-none");
}

// Login Function
function login() {
    var Alert = document.getElementById("loginformAlert");
    Alert.innerHTML = "";
    const email = document.getElementById("lemail").value;
    const password = document.getElementById("lpassword").value;
    if (email != "" && password != "") {
        document.getElementById("loginbtn").value = "Checking...";
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then((user) => {
                document.getElementById("loginbtn").value = "Logging In...";
                logging();
            })
            .catch((error) => {
                document.getElementById("loginbtn").value = "Login Failed";
                AlertText = `
            <div class="alert alert-secondary  alert-dismissible fade show text-center mb-1" role="alert">
                <strong>${error.message}</strong>
                <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
            </div>`;
                Alert.innerHTML += AlertText;
            })
    }
    else {
        AlertText = `
        <div class="alert alert-secondary  alert-dismissible fade show text-center mb-1" role="alert">
            <strong>Enter Valid Email & Password</strong>
            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        </div>`;
        Alert.innerHTML += AlertText;
    }
}

// Logging Function
function logging() {
    var Alert = document.getElementById("loginformAlert");
    firebase.auth().onAuthStateChanged((user) => {
        if (user.email == "admin@ayushhealthcare.ml") {
            location.replace("admin.html")
        }
    });
}
//--------------------------------------------------End of Login Function --------------------------------------------------//