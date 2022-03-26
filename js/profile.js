firebase.auth().onAuthStateChanged((user) => {
    if (!user) {
        location.replace("login.html")
    }
    var UserEmail = user.email;
    var UserName = user.displayName;
    var UserRoll = user.photoURL;

    // Values
    document.getElementById("admin-mail").value = UserEmail;
    document.getElementById("new-name").value = UserName;
    document.getElementById("new-phone").value = UserRoll;
})

function hideall() {
    document.getElementById('dashboard-section').classList.add("d-none");
    document.getElementById('profile-section').classList.add("d-none");
    document.getElementById('help-section').classList.add("d-none");
    document.getElementById('query-section').classList.add("d-none");
}
function showdashboard_section() {
    hideall();
    document.getElementById('dashboard-section').classList.remove("d-none");
}
function showquery_section() {
    hideall();
    document.getElementById('query-section').classList.remove("d-none");
}
function showprofile_section() {
    hideall();
    document.getElementById('profile-section').classList.remove("d-none");
}
function showhelp_section() {
    hideall();
    document.getElementById('help-section').classList.remove("d-none");
}

// Logout Function with Prompt
function logoutwithprompt() {
    Swal.fire({
        icon: 'question',
        title: 'Are you sure you want to logout?',
        showDenyButton: true,
        confirmButtonText: 'Yes',
        denyButtonText: `No`
    }).then((result) => {
        if (result.isConfirmed) {
            firebase.auth().signOut()
        }
    })
}

// Change Password Function
function changePass() {
    var Alert = document.getElementById("profileCredentialAlert");
    const newPassword = document.getElementById("new-password").value;
    if (newPassword != "") {
        document.getElementById("changePassButton").disabled = true;
        document.getElementById("changePassButton").value = 'Loading..';
        const user = firebase.auth().currentUser;
        user.updatePassword(newPassword).then(() => {
            AlertText = `
            <div class="alert alert-secondary  alert-dismissible fade show text-center mb-1" role="alert">
                <strong>Password Updated Successfully!</strong>
                <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>`;
            Alert.innerHTML += AlertText;
            document.getElementById("changePassButton").value = 'Successful';
            setTimeout(logout, 5000)

        }).catch((error) => {
            AlertText = `
            <div class="alert alert-secondary  alert-dismissible fade show text-center mb-1" role="alert">
                <strong>${error.message}</strong>
                <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>`;
            Alert.innerHTML += AlertText;
            document.getElementById("changePassButton").value = 'Try Again';
        });
    }
    else {
        AlertText = `
            <div class="alert alert-secondary  alert-dismissible fade show text-center mb-1" role="alert">
                <strong>Enter a Valid Password</strong>
                <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>`;
        Alert.innerHTML += AlertText;
    }
}

// Update Email Function
function updateemail() {
    var Alert = document.getElementById("profileCredentialAlert");
    const email = document.getElementById("newemail").value;
    if (email != "") {
        document.getElementById("updateemailButton").disabled = true;
        document.getElementById("updateemailButton").value = 'Loading..';
        const user = firebase.auth().currentUser;
        user.updateEmail(email).then(() => {
            AlertText = `
            <div class="alert alert-secondary  alert-dismissible fade show text-center mb-1" role="alert">
                <strong>Email Updated Successfully!</strong>
                <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>`;
            Alert.innerHTML += AlertText;
            window.setTimeout(function () { location.reload() }, 3000)
        }).catch((error) => {
            AlertText = `
            <div class="alert alert-secondary  alert-dismissible fade show text-center mb-1" role="alert">
                <strong>${error.message}</strong>
                <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>`;
            Alert.innerHTML += AlertText;
        });
    }
    else {
        AlertText = `
            <div class="alert alert-secondary  alert-dismissible fade show text-center mb-1" role="alert">
                <strong>Enter a Valid Email Address</strong>
                <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>`;
        Alert.innerHTML += AlertText;
    }


}

// Update Name Function
function updatename() {
    var Alert = document.getElementById("profileUpdateAlert");
    const name = document.getElementById("new-name").value;
    if (name != "") {
        document.getElementById("updatenameButton").disabled = true;
        document.getElementById("updatenameButton").value = 'Loading..';
        const user = firebase.auth().currentUser;
        user.updateProfile({
            displayName: name
        }).then(() => {
            AlertText = `
            <div class="alert alert-secondary  alert-dismissible fade show text-center mb-1" role="alert">
                <strong>Name Updated Successfully</strong>
                <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>`;
            Alert.innerHTML += AlertText;
        }).catch((error) => {
            AlertText = `
            <div class="alert alert-secondary  alert-dismissible fade show text-center mb-1" role="alert">
                <strong>${error.message}</strong>
                <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>`;
            Alert.innerHTML += AlertText;
        });
    }
    else {
        AlertText = `
            <div class="alert alert-secondary  alert-dismissible fade show text-center mb-1" role="alert">
                <strong>Enter a Valid Name</strong>
                <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>`;
        Alert.innerHTML += AlertText;
    }
}

//Update Roll No Function
function updatephone() {
    var Alert = document.getElementById("profileUpdateAlert");
    const phone = document.getElementById("new-phone").value;
    if (phone != "") {
        document.getElementById("updatephoneButton").disabled = true;
        document.getElementById("updatephoneButton").value = 'Loading..';
        const user = firebase.auth().currentUser;
        user.updateProfile({
            photoURL: phone
        }).then(() => {
            AlertText = `
            <div class="alert alert-secondary  alert-dismissible fade show text-center mb-1" role="alert">
                <strong>Roll No Updated Successfully</strong>
                <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>`;
            Alert.innerHTML += AlertText;
        }).catch((error) => {
            AlertText = `
            <div class="alert alert-secondary  alert-dismissible fade show text-center mb-1" role="alert">
                <strong>${error.message}</strong>
                <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>`;
            Alert.innerHTML += AlertText;
        });
    }
    else {
        AlertText = `
            <div class="alert alert-secondary  alert-dismissible fade show text-center mb-1" role="alert">
                <strong>Enter a Valid Roll No</strong>
                <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>`;
        Alert.innerHTML += AlertText;
    }

}

getQueryDetails();

function getQueryDetails() {
    firebase.database().ref('Query').on('value', function (snapshot) {
        document.getElementById("contact-table").innerHTML = "";
        var e = 1;
        snapshot.forEach(function (childSnapshot) {
            data = childSnapshot.val();
            key = childSnapshot.key;
            row =
                `<tr>
                    <td>${e++}</td>
                    <td>${data.ID}</td>
                    <td>${data.Date}</td>
                    <td>${data.Name}</td>
                    <td>${data.Add}</td>
                    <td>${data.Query}</td>
                    <td>${data.Status}</td>
                    <td>
                        <a href="https://web.whatsapp.com/send?phone=+91${data.Cno}" class="table_button" target="_blank"><i class="fa fa-brands fa-whatsapp"></i></a>
                        <a href="mailto:${data.Email}" class="table_button" target="_blank"><i class="fa fa-envelope"></i></a>
                    </td>
                    <td>
                        <a href="#" class="table_button" onclick="editStudent('${data.ID}')"><i class="fa fa-edit"></i></a>
                    </td>
                </tr>`;
            document.getElementById("contact-table").innerHTML += row;
        });
    });
}

function editStudent(ID) {
    var Status = prompt("Enter Status");
    if (Status != null) {
        firebase.database().ref('Query/' + ID).update({
            Status: Status
        });
    }
    getQueryDetails();

}