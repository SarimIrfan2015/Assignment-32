let loginMode = true;

const title = document.getElementById("title");
const mainBtn = document.getElementById("mainBtn");
const switchBtn = document.getElementById("switchBtn");
const error = document.getElementById("error");

switchBtn.addEventListener("click", () => {

    loginMode = !loginMode;

    if (loginMode) {

        title.innerText = "Login";
        mainBtn.innerText = "Login";
        switchBtn.innerText = "Create Account";

    }
    else {

        title.innerText = "Signup";
        mainBtn.innerText = "Signup";
        switchBtn.innerText = "Already have account?";

    }

});


mainBtn.addEventListener("click", () => {

    let email =
        document.getElementById("email")
            .value.trim();

    let password =
        document.getElementById("password")
            .value.trim();

    error.innerText = "";

    if (email === "" || password === "") {

        error.innerText =
            "Please fill all fields";

        return;

    }


    if (loginMode) {

        let savedEmail =
            localStorage.getItem("email");

        let savedPassword =
            localStorage.getItem("password");


        if (email === savedEmail &&
            password === savedPassword) {

            localStorage.setItem(
                "loggedIn",
                "true"
            );

            showHome();

        } else {

            error.innerText =
                "Wrong Email or Password";

        }

    }

    else {

        localStorage.setItem(
            "email",
            email
        );

        localStorage.setItem(
            "password",
            password
        );

        alert(
            "Signup Successful"
        );

        loginMode = true;

        title.innerText = "Login";
        mainBtn.innerText = "Login";
        switchBtn.innerText =
            "Create Account";

    }

});

function showHome() {

    document.getElementById(
        "auth"
    ).style.display = "none";

    document.getElementById(
        "home"
    ).style.display = "block";

    document.getElementById(
        "userEmail"
    ).innerText =
        "Logged in: " +
        localStorage.getItem("email");

}

function logout() {

    localStorage.removeItem(
        "loggedIn"
    );

    location.reload();

}

if (
    localStorage.getItem(
        "loggedIn"
    )
) {

    showHome();

}
