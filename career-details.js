// ================= CAREER DATA =================

const careers = {

    "Software Developer": {

        icon: "💻",

        category: "Technology & IT",

        description:
            "Build websites, applications and software using programming languages.",

        overview:
            "Software developers design, develop, test and maintain software applications. They use programming languages, development tools and problem-solving skills to create solutions for users and organizations.",

        education:
            "BCA / B.Tech",

        duration:
            "3–4 Years",

        workType:
            "IT / Software",

        demand:
            "High",

        eligibility: [
            "12th pass from a recognized board.",
            "Computer and mathematics-related subjects can be useful.",
            "BCA, B.Tech or another relevant qualification can be useful for many roles."
        ],

        skills: [
            "Programming",
            "Problem Solving",
            "HTML & CSS",
            "JavaScript",
            "Database",
            "Logical Thinking"
        ],

        subjects: [
            "Programming",
            "Data Structures",
            "Database Management",
            "Operating Systems",
            "Computer Networks",
            "Web Development"
        ],

        exams: [
            [
                "University Entrance Exams",
                "For admission to certain courses."
            ],
            [
                "Skill Certifications",
                "Programming and technology certifications can help demonstrate skills."
            ]
        ],

        jobs: [
            "Software Developer",
            "Web Developer",
            "Frontend Developer",
            "Backend Developer",
            "Full Stack Developer",
            "Application Developer"
        ]

    },


    "Data Scientist": {

        icon: "📊",

        category: "Technology & IT",

        description:
            "Analyze data and use statistics and machine learning to solve problems.",

        overview:
            "Data scientists work with data to identify patterns, create models and generate useful insights for organizations.",

        education:
            "BCA / B.Tech / B.Sc",

        duration:
            "3–4 Years",

        workType:
            "Data / Technology",

        demand:
            "High",

        eligibility: [
            "12th pass from a recognized board.",
            "Mathematics and statistics can be useful.",
            "Relevant graduation and technical skills are useful."
        ],

        skills: [
            "Python",
            "Statistics",
            "Machine Learning",
            "Data Analysis",
            "SQL",
            "Problem Solving"
        ],

        subjects: [
            "Statistics",
            "Python",
            "Machine Learning",
            "Data Structures",
            "Database",
            "Mathematics"
        ],

        exams: [
            [
                "University Entrance Exams",
                "Requirements depend on the selected course and institution."
            ],
            [
                "Professional Certifications",
                "Data and cloud certifications can help demonstrate technical skills."
            ]
        ],

        jobs: [
            "Data Scientist",
            "Data Analyst",
            "ML Engineer",
            "Business Analyst",
            "Data Engineer",
            "AI Specialist"
        ]

    },


    "Doctor": {

        icon: "🩺",

        category: "Medical & Healthcare",

        description:
            "Diagnose diseases and provide medical treatment to patients.",

        overview:
            "Doctors examine patients, diagnose medical conditions and provide treatment. Medical education and professional registration requirements depend on the country and applicable regulations.",

        education:
            "MBBS",

        duration:
            "Typically 5+ Years",

        workType:
            "Healthcare",

        demand:
            "Healthcare",

        eligibility: [
            "Eligibility depends on the medical course and applicable admission rules.",
            "Science subjects are generally required for medical undergraduate programs.",
            "Admission requirements should be checked with the relevant authority or institution."
        ],

        skills: [
            "Communication",
            "Clinical Knowledge",
            "Decision Making",
            "Empathy",
            "Observation",
            "Teamwork"
        ],

        subjects: [
            "Anatomy",
            "Physiology",
            "Biochemistry",
            "Pathology",
            "Pharmacology",
            "Medicine"
        ],

        exams: [
            [
                "Medical Entrance Examination",
                "Admission requirements depend on the applicable rules."
            ],
            [
                "Professional Registration",
                "Medical practice is subject to applicable professional regulations."
            ]
        ],

        jobs: [
            "General Physician",
            "Medical Officer",
            "Resident Doctor",
            "Medical Researcher",
            "Specialist Doctor",
            "Hospital Doctor"
        ]

    }

};


// ================= GET CAREER =================

const params =
    new URLSearchParams(window.location.search);

const selectedCareer =
    params.get("career") || "Software Developer";


// ================= LOAD CAREER =================

function loadCareer(careerName) {

    const career =
        careers[careerName] || careers["Software Developer"];


    // Hero

    document.getElementById("careerIcon")
        .innerText = career.icon;

    document.getElementById("careerCategory")
        .innerText = career.category;

    document.getElementById("careerTitle")
        .innerText = careerName;

    document.getElementById("careerShortDescription")
        .innerText = career.description;


    // Overview

    document.getElementById("careerOverview")
        .innerText = career.overview;


    // Quick information

    document.getElementById("education")
        .innerText = career.education;

    document.getElementById("duration")
        .innerText = career.duration;

    document.getElementById("workType")
        .innerText = career.workType;

    document.getElementById("demand")
        .innerText = career.demand;


    // Eligibility

    const eligibility =
        document.getElementById("eligibilityList");

    eligibility.innerHTML = "";

    career.eligibility.forEach(function(item) {

        const li =
            document.createElement("li");

        li.innerText = item;

        eligibility.appendChild(li);

    });


    // Skills

    const skills =
        document.getElementById("skillsContainer");

    skills.innerHTML = "";

    career.skills.forEach(function(skill) {

        const span =
            document.createElement("span");

        span.innerText = skill;

        skills.appendChild(span);

    });


    // Subjects

    const subjects =
        document.getElementById("subjectGrid");

    subjects.innerHTML = "";

    career.subjects.forEach(function(subject) {

        const div =
            document.createElement("div");

        div.innerText = subject;

        subjects.appendChild(div);

    });


    // Exams

    const exams =
        document.getElementById("examList");

    exams.innerHTML = "";

    career.exams.forEach(function(exam) {

        const div =
            document.createElement("div");

        div.innerHTML = `
            <strong>${exam[0]}</strong>
            <span>${exam[1]}</span>
        `;

        exams.appendChild(div);

    });


    // Jobs

    const jobs =
        document.getElementById("jobGrid");

    jobs.innerHTML = "";

    career.jobs.forEach(function(job) {

        const div =
            document.createElement("div");

        div.innerText = job;

        jobs.appendChild(div);

    });


    // Page title

    document.title =
        careerName + " - Skill2Career";


    // Check saved career

    checkSavedCareer(careerName);
}


// ================= SAVE CAREER =================

function saveCareer() {

    let savedCareers =
        JSON.parse(
            localStorage.getItem("savedCareers")
        ) || [];


    if (!savedCareers.includes(selectedCareer)) {

        savedCareers.push(selectedCareer);

        localStorage.setItem(
            "savedCareers",
            JSON.stringify(savedCareers)
        );

    }


    updateSaveButton();

}


// ================= UPDATE SAVE BUTTON =================

function updateSaveButton() {

    const button =
        document.getElementById("saveButton");

    let savedCareers =
        JSON.parse(
            localStorage.getItem("savedCareers")
        ) || [];


    if (savedCareers.includes(selectedCareer)) {

        button.innerText =
            "♥ Saved Career";

        button.classList.add("saved");

    } else {

        button.innerText =
            "♡ Save Career";

        button.classList.remove("saved");

    }

}


// ================= CHECK SAVED =================

function checkSavedCareer(careerName) {

    let savedCareers =
        JSON.parse(
            localStorage.getItem("savedCareers")
        ) || [];


    const button =
        document.getElementById("saveButton");


    if (savedCareers.includes(careerName)) {

        button.innerText =
            "♥ Saved Career";

        button.classList.add("saved");

    }

}


// ================= RELATED CAREER =================

function openCareer(careerName) {

    window.location.href =
        "career-details.html?career=" +
        encodeURIComponent(careerName);

}


// ================= START =================

loadCareer(selectedCareer);