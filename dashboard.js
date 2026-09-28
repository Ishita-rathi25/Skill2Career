// ================= LOAD USER DATA =================

function loadUserData() {

    const name =
        localStorage.getItem("skill2careerName");

    const email =
        localStorage.getItem("skill2careerEmail");

    const role =
        localStorage.getItem("skill2careerRole");


    // Agar user signup nahi hua

    if (!name || !email) {

        window.location.href =
            "login.html";

        return;

    }


    // Welcome name

    document.getElementById("userName").innerText =
        name;


    // Profile name

    document.getElementById("profileName").innerText =
        name;


    // Email

    document.getElementById("profileEmail").innerText =
        email;


    // Role

    document.getElementById("profileRole").innerText =
        role || "Student";


    document.getElementById("profileAccountType").innerText =
        role || "Student";


    // First letter avatar

    document.getElementById("profileAvatar").innerText =
        name.charAt(0).toUpperCase();

}



// ================= SAVED CAREERS =================

function loadSavedCareers() {

    const saved =
        JSON.parse(
            localStorage.getItem("savedCareers")
        ) || [];


    const container =
        document.getElementById("savedCareers");


    document.getElementById("savedCount").innerText =
        saved.length;


    // No saved career

    if (saved.length === 0) {

        container.innerHTML = `

            <div class="empty-saved">

                <div style="font-size:35px;">
                    💼
                </div>

                <p>
                    You haven't saved any careers yet.
                </p>

                <br>

                <button
                    onclick="window.location.href='home.html'"
                    style="
                    padding:9px 15px;
                    border:none;
                    border-radius:6px;
                    background:#7659e6;
                    color:white;
                    cursor:pointer;
                    ">
                    Explore Careers
                </button>

            </div>

        `;

        return;

    }


    container.innerHTML = "";


    saved.forEach(function(career) {

        const card =
            document.createElement("div");

        card.className =
            "saved-card";


        card.innerHTML = `

            <h3>
                ${career}
            </h3>

            <p>
                Explore education, skills,
                eligibility and career opportunities.
            </p>

            <button
                onclick="viewCareer('${career}')">
                View Details →
            </button>

        `;


        container.appendChild(card);

    });

}



// ================= VIEW CAREER =================

function viewCareer(careerName) {

    window.location.href =
        "career-details.html?career=" +
        encodeURIComponent(careerName);

}



// ================= LOGOUT =================

function logout() {

    const confirmLogout =
        confirm(
            "Are you sure you want to logout?"
        );


    if (!confirmLogout) {

        return;

    }


    // User data remove

    localStorage.removeItem(
        "skill2careerName"
    );

    localStorage.removeItem(
        "skill2careerEmail"
    );

    localStorage.removeItem(
        "skill2careerRole"
    );


    window.location.href =
        "login.html";

}



// ================= START =================

loadUserData();

loadSavedCareers();