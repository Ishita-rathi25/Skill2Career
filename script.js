// ================= SEARCH CAREERS =================

function searchCareer() {

    const searchInput =
        document.getElementById("careerSearch");

    const searchText =
        searchInput.value.toLowerCase().trim();

    const cards =
        document.querySelectorAll(".career-card");

    let found = 0;

    cards.forEach(function(card) {

        const careerName =
            card.querySelector("h3")
                .innerText
                .toLowerCase();

        const careerDescription =
            card.querySelector("p")
                .innerText
                .toLowerCase();

        const category =
            card.dataset.category.toLowerCase();

        if (
            careerName.includes(searchText) ||
            careerDescription.includes(searchText) ||
            category.includes(searchText)
        ) {

            card.style.display = "block";
            found++;

        } else {

            card.style.display = "none";

        }

    });


    const noResult =
        document.getElementById("noResult");

    if (found === 0) {
        noResult.style.display = "block";
    } else {
        noResult.style.display = "none";
    }
}


// ================= CATEGORY FILTER =================

function filterCareer(category) {

    const cards =
        document.querySelectorAll(".career-card");

    const buttons =
        document.querySelectorAll(".category");

    let found = 0;


    // Remove active from all buttons

    buttons.forEach(function(button) {
        button.classList.remove("active");
    });


    // Find clicked button

    event.target.classList.add("active");


    cards.forEach(function(card) {

        if (
            category === "all" ||
            card.dataset.category === category
        ) {

            card.style.display = "block";
            found++;

        } else {

            card.style.display = "none";

        }

    });


    const noResult =
        document.getElementById("noResult");

    if (found === 0) {
        noResult.style.display = "block";
    } else {
        noResult.style.display = "none";
    }


    // Scroll to career section

    document.getElementById("careers")
        .scrollIntoView({
            behavior: "smooth"
        });
}


// ================= CAREER DETAILS =================

function viewCareer(careerName) {

    window.location.href =
        "career-details.html?career=" +
        encodeURIComponent(careerName);

}


// ================= CAREER QUIZ =================

function startQuiz() {

    alert(
        "Career Quiz\n\n" +
        "This section will help you discover " +
        "careers based on your interests, skills and personality."
    );

}


// ================= MOBILE MENU =================

function toggleMenu() {

    const nav =
        document.querySelector("nav");

    const buttons =
        document.querySelector(".nav-buttons");


    if (nav.style.display === "flex") {

        nav.style.display = "none";
        buttons.style.display = "none";

    } else {

        nav.style.display = "flex";
        buttons.style.display = "flex";

        nav.style.position = "absolute";
        nav.style.top = "75px";
        nav.style.left = "0";
        nav.style.right = "0";

        nav.style.background = "white";
        nav.style.padding = "20px";

        nav.style.flexDirection = "column";

        buttons.style.position = "absolute";
        buttons.style.top = "300px";
        buttons.style.left = "0";
        buttons.style.right = "0";

        buttons.style.background = "white";
        buttons.style.padding = "15px";

        buttons.style.justifyContent = "center";
    }

}
function startQuiz() {
    window.location.href = "quiz.html";
}
