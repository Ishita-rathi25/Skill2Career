// ================= SEARCH COURSES =================

function searchCourses() {

    const searchInput =
        document.getElementById("courseSearch");

    const searchText =
        searchInput.value.toLowerCase().trim();

    const cards =
        document.querySelectorAll(".course-card");

    const noResult =
        document.getElementById("noResult");

    let found = 0;

    cards.forEach(function(card) {

        const courseName =
            card.dataset.name.toLowerCase();

        const courseCategory =
            card.dataset.category.toLowerCase();

        const courseText =
            card.innerText.toLowerCase();


        if (
            courseName.includes(searchText) ||
            courseCategory.includes(searchText) ||
            courseText.includes(searchText)
        ) {

            card.style.display = "block";

            found++;

        } else {

            card.style.display = "none";

        }

    });


    if (found === 0) {

        noResult.style.display = "block";

    } else {

        noResult.style.display = "none";

    }

}



// ================= FILTER COURSES =================

function filterCourses(category, button) {

    const cards =
        document.querySelectorAll(".course-card");


    // Remove active from all buttons

    document.querySelectorAll(".category")
        .forEach(function(btn) {

            btn.classList.remove("active");

        });


    // Add active to clicked button

    button.classList.add("active");


    let found = 0;


    cards.forEach(function(card) {

        const cardCategory =
            card.dataset.category;


        if (
            category === "all" ||
            cardCategory === category
        ) {

            card.style.display = "block";

            found++;

        } else {

            card.style.display = "none";

        }

    });


    document.getElementById("noResult").style.display =
        found === 0 ? "block" : "none";

}



// ================= COURSE DETAILS =================

function viewCourse(courseName) {

    window.location.href =
        "course-details.html?course=" +
        encodeURIComponent(courseName);

}



// ================= CAREER QUIZ =================

function openQuiz() {

    window.location.href = "quiz.html";

}