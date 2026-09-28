// ================= SIGNUP FORM =================

const signupForm = document.getElementById("signupForm");

signupForm.addEventListener("submit", function(event) {

    event.preventDefault();


    // ================= GET VALUES =================

    const name =
        document.getElementById("name").value.trim();

    const email =
        document.getElementById("email").value.trim();

    const role =
        document.getElementById("role").value;

    const password =
        document.getElementById("password").value;

    const confirmPassword =
        document.getElementById("confirmPassword").value;

    const terms =
        document.getElementById("terms").checked;

    const message =
        document.getElementById("message");


    // ================= VALIDATION =================

    if (name === "") {

        showError(
            message,
            "Please enter your full name."
        );

        return;
    }


    if (email === "") {

        showError(
            message,
            "Please enter your email."
        );

        return;
    }


    if (role === "") {

        showError(
            message,
            "Please select your account type."
        );

        return;
    }


    if (password.length < 6) {

        showError(
            message,
            "Password must contain at least 6 characters."
        );

        return;
    }


    if (password !== confirmPassword) {

        showError(
            message,
            "Passwords do not match."
        );

        return;
    }


    if (!terms) {

        showError(
            message,
            "Please accept the Terms & Conditions."
        );

        return;
    }


    // ================= SUCCESS =================

    message.className =
        "success-message";

    message.innerHTML = `
        <div class="success-icon">✓</div>

        <strong>
            Account Created Successfully!
        </strong>

        <span>
            Welcome to Skill2Career 🎓
        </span>
    `;


    // ================= SAVE USER DATA =================

    localStorage.setItem(
        "skill2careerName",
        name
    );

    localStorage.setItem(
        "skill2careerEmail",
        email
    );

    localStorage.setItem(
        "skill2careerRole",
        role
    );


    // ================= DISABLE BUTTON =================

    const createButton =
        document.querySelector(".create-btn");

    createButton.disabled = true;

    createButton.innerText =
        "Account Created ✓";


    // ================= GO TO LOGIN =================

    setTimeout(function() {

        window.location.href =
            "login.html";

    }, 2000);

});


// ================= ERROR FUNCTION =================

function showError(message, text) {

    message.className =
        "error-message";

    message.innerHTML = text;

}


// ================= PASSWORD TOGGLE =================

function togglePassword(inputId, button) {

    const input =
        document.getElementById(inputId);


    if (input.type === "password") {

        input.type = "text";

        button.innerText = "Hide";

    } else {

        input.type = "password";

        button.innerText = "Show";

    }

}