// ================= QUIZ QUESTIONS =================

const questions = [

    {
        question:
            "What type of work do you enjoy the most?",

        options: [
            {
                text: "Working with computers and technology",
                career: "Software Developer"
            },
            {
                text: "Helping and treating people",
                career: "Doctor"
            },
            {
                text: "Managing business and money",
                career: "Chartered Accountant"
            },
            {
                text: "Designing and creating things",
                career: "UI/UX Designer"
            }
        ]
    },


    {
        question:
            "Which subject do you enjoy the most?",

        options: [
            {
                text: "Computer Science",
                career: "Software Developer"
            },
            {
                text: "Biology",
                career: "Doctor"
            },
            {
                text: "Accounts and Mathematics",
                career: "Chartered Accountant"
            },
            {
                text: "Arts and Creativity",
                career: "UI/UX Designer"
            }
        ]
    },


    {
        question:
            "What is your biggest strength?",

        options: [
            {
                text: "Problem solving",
                career: "Data Scientist"
            },
            {
                text: "Communication and helping others",
                career: "Teacher"
            },
            {
                text: "Analytical thinking",
                career: "Chartered Accountant"
            },
            {
                text: "Creativity",
                career: "UI/UX Designer"
            }
        ]
    },


    {
        question:
            "Which work environment would you prefer?",

        options: [
            {
                text: "Technology company",
                career: "Software Developer"
            },
            {
                text: "Hospital or healthcare",
                career: "Doctor"
            },
            {
                text: "Corporate office",
                career: "Business Manager"
            },
            {
                text: "Creative studio",
                career: "UI/UX Designer"
            }
        ]
    },


    {
        question:
            "What kind of problems do you like solving?",

        options: [
            {
                text: "Technical problems",
                career: "Software Developer"
            },
            {
                text: "Health-related problems",
                career: "Doctor"
            },
            {
                text: "Financial problems",
                career: "Chartered Accountant"
            },
            {
                text: "Creative problems",
                career: "UI/UX Designer"
            }
        ]
    },


    {
        question:
            "Which activity sounds most interesting?",

        options: [
            {
                text: "Coding an application",
                career: "Software Developer"
            },
            {
                text: "Researching medicine",
                career: "Doctor"
            },
            {
                text: "Analysing financial data",
                career: "Data Scientist"
            },
            {
                text: "Designing a website",
                career: "UI/UX Designer"
            }
        ]
    },


    {
        question:
            "What would you like to develop more?",

        options: [
            {
                text: "Technical skills",
                career: "Software Developer"
            },
            {
                text: "Communication skills",
                career: "Teacher"
            },
            {
                text: "Business skills",
                career: "Business Manager"
            },
            {
                text: "Creative skills",
                career: "UI/UX Designer"
            }
        ]
    },


    {
        question:
            "What is most important to you in a career?",

        options: [
            {
                text: "Technology and innovation",
                career: "Software Developer"
            },
            {
                text: "Helping people",
                career: "Doctor"
            },
            {
                text: "Financial growth",
                career: "Chartered Accountant"
            },
            {
                text: "Creativity and freedom",
                career: "UI/UX Designer"
            }
        ]
    }

];


// ================= VARIABLES =================

let currentQuestion = 0;

let selectedAnswers = [];

let finalCareer = "";


// ================= LOAD QUESTION =================

function loadQuestion() {

    const question =
        questions[currentQuestion];


    document.getElementById("question").innerText =
        question.question;


    document.getElementById("questionNumber").innerText =
        "Question " +
        (currentQuestion + 1) +
        " of " +
        questions.length;


    const percentage =
        Math.round(
            (currentQuestion /
            questions.length) * 100
        );


    document.getElementById("progressPercent").innerText =
        percentage + "%";


    document.getElementById("progress").style.width =
        percentage + "%";


    const optionsContainer =
        document.getElementById("options");


    optionsContainer.innerHTML = "";


    question.options.forEach(function(option, index) {

        const button =
            document.createElement("button");


        button.className = "option";

        button.innerText =
            option.text;


        if (
            selectedAnswers[currentQuestion] ===
            option.career
        ) {

            button.classList.add("selected");

        }


        button.onclick = function() {

            selectAnswer(
                index,
                option.career,
                button
            );

        };


        optionsContainer.appendChild(button);

    });


    // Previous button

    document.getElementById("previousBtn").disabled =
        currentQuestion === 0;


    // Last question button

    if (
        currentQuestion ===
        questions.length - 1
    ) {

        document.getElementById("nextBtn").innerText =
            "Show Result 🎯";

    } else {

        document.getElementById("nextBtn").innerText =
            "Next →";

    }

}


// ================= SELECT ANSWER =================

function selectAnswer(
    index,
    career,
    button
) {

    selectedAnswers[currentQuestion] =
        career;


    document.querySelectorAll(".option")
        .forEach(function(option) {

            option.classList.remove("selected");

        });


    button.classList.add("selected");

}


// ================= NEXT QUESTION =================

function nextQuestion() {

    if (
        !selectedAnswers[currentQuestion]
    ) {

        alert(
            "Please select an answer first."
        );

        return;

    }


    if (
        currentQuestion <
        questions.length - 1
    ) {

        currentQuestion++;

        loadQuestion();

    } else {

        showResult();

    }

}


// ================= PREVIOUS =================

function previousQuestion() {

    if (currentQuestion > 0) {

        currentQuestion--;

        loadQuestion();

    }

}


// ================= SHOW RESULT =================

function showResult() {

    const scores = {};


    selectedAnswers.forEach(function(career) {

        if (career) {

            if (!scores[career]) {

                scores[career] = 0;

            }

            scores[career]++;

        }

    });


    let highestScore = 0;

    let recommendedCareer =
        "Software Developer";


    for (
        const career in scores
    ) {

        if (
            scores[career] >
            highestScore
        ) {

            highestScore =
                scores[career];

            recommendedCareer =
                career;

        }

    }


    finalCareer =
        recommendedCareer;


    document.getElementById("resultCareer").innerText =
        recommendedCareer;


    const descriptions = {

        "Software Developer":
            "You may enjoy technology, coding and solving technical problems.",

        "Doctor":
            "You may enjoy helping people, healthcare and science.",

        "Chartered Accountant":
            "You may enjoy accounting, finance and analytical work.",

        "UI/UX Designer":
            "You may enjoy creativity, design and creating user-friendly experiences.",

        "Data Scientist":
            "You may enjoy data, mathematics, analysis and problem solving.",

        "Teacher":
            "You may enjoy communication, learning and helping others grow.",

        "Business Manager":
            "You may enjoy leadership, business strategy and management."
    };


    document.getElementById("resultDescription").innerText =
        descriptions[recommendedCareer] ||
        "Your answers suggest this career may match your interests and strengths.";


    document.querySelector(".quiz-container").style.display =
        "none";


    document.querySelector(".quiz-header").style.display =
        "none";


    document.getElementById("resultSection").style.display =
        "block";


    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

}


// ================= VIEW RESULT CAREER =================

function viewResultCareer() {

    window.location.href =
        "career-details.html?career=" +
        encodeURIComponent(finalCareer);

}


// ================= RESTART QUIZ =================

function restartQuiz() {

    currentQuestion = 0;

    selectedAnswers = [];

    finalCareer = "";


    document.getElementById("resultSection").style.display =
        "none";


    document.querySelector(".quiz-container").style.display =
        "block";


    document.querySelector(".quiz-header").style.display =
        "block";


    loadQuestion();


    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

}


// ================= START =================

loadQuestion();