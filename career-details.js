// ================= CAREER DATA =================

const careers = {

    "Software Developer": {
        category: "Technology",
        icon: "💻",
        title: "Software Developer",
        shortDescription:
            "Design, develop and maintain software applications and systems.",
        education: "BCA / B.Tech / B.Sc Computer Science",
        duration: "3–4 Years",
        workType: "IT / Software",
        demand: "High",
        eligibility:
            "A relevant graduation degree or equivalent technical skills.",
        skills: [
            "Programming",
            "Problem Solving",
            "Data Structures",
            "Database",
            "Web Development",
            "Logical Thinking"
        ],
        subjects: [
            "Programming",
            "Data Structures",
            "Database Management",
            "Operating Systems",
            "Computer Networks"
        ],
        exams: [
            "University Entrance Exams",
            "Technical Certifications"
        ],
        jobs: [
            "Software Developer",
            "Web Developer",
            "Application Developer",
            "Software Engineer"
        ]
    },


    "Data Scientist": {
        category: "Technology",
        icon: "📊",
        title: "Data Scientist",
        shortDescription:
            "Use data, statistics and machine learning to solve real-world problems.",
        education: "BCA / B.Tech / B.Sc / Mathematics / Statistics",
        duration: "3–4 Years + Specialization",
        workType: "IT / Data",
        demand: "High",
        eligibility:
            "Graduation with strong mathematics, statistics or programming knowledge.",
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
            "Mathematics",
            "Python",
            "Machine Learning",
            "Database Management"
        ],
        exams: [
            "University Entrance Exams",
            "Data Science Certifications"
        ],
        jobs: [
            "Data Scientist",
            "Data Analyst",
            "Machine Learning Engineer",
            "Business Analyst"
        ]
    },


    "Doctor": {
        category: "Medical",
        icon: "🩺",
        title: "Doctor",
        shortDescription:
            "Diagnose, treat and help patients maintain their health.",
        education: "MBBS",
        duration: "5.5 Years",
        workType: "Healthcare",
        demand: "High",
        eligibility:
            "10+2 with required science subjects and qualifying medical admission requirements.",
        skills: [
            "Medical Knowledge",
            "Communication",
            "Decision Making",
            "Patient Care",
            "Problem Solving"
        ],
        subjects: [
            "Biology",
            "Anatomy",
            "Physiology",
            "Biochemistry",
            "Medicine"
        ],
        exams: [
            "NEET-UG",
            "Relevant Medical Entrance"
        ],
        jobs: [
            "Doctor",
            "Medical Officer",
            "Resident Doctor",
            "Healthcare Professional"
        ]
    },


    "Chartered Accountant": {
        category: "Finance",
        icon: "📈",
        title: "Chartered Accountant",
        shortDescription:
            "Work in accounting, auditing, taxation and financial management.",
        education: "B.Com / Commerce + CA Course",
        duration: "Varies by pathway",
        workType: "Finance / Accounting",
        demand: "High",
        eligibility:
            "Students can enter the CA pathway according to ICAI eligibility requirements.",
        skills: [
            "Accounting",
            "Financial Analysis",
            "Taxation",
            "Auditing",
            "Mathematics",
            "Attention to Detail"
        ],
        subjects: [
            "Accounting",
            "Business Law",
            "Taxation",
            "Cost Management",
            "Financial Management"
        ],
        exams: [
            "CA Foundation",
            "CA Intermediate",
            "CA Final"
        ],
        jobs: [
            "Chartered Accountant",
            "Auditor",
            "Tax Consultant",
            "Financial Analyst"
        ]
    },


    "Lawyer": {
        category: "Law",
        icon: "⚖️",
        title: "Lawyer",
        shortDescription:
            "Provide legal advice and represent clients in legal matters.",
        education: "LLB / BA LLB",
        duration: "3–5 Years",
        workType: "Legal",
        demand: "High",
        eligibility:
            "Required qualifications depend on the chosen law programme.",
        skills: [
            "Communication",
            "Legal Research",
            "Critical Thinking",
            "Argumentation",
            "Writing",
            "Problem Solving"
        ],
        subjects: [
            "Constitutional Law",
            "Criminal Law",
            "Contract Law",
            "Family Law",
            "Legal Writing"
        ],
        exams: [
            "CLAT",
            "AILET",
            "University Law Entrance Exams"
        ],
        jobs: [
            "Advocate",
            "Legal Advisor",
            "Corporate Lawyer",
            "Legal Consultant"
        ]
    },


    "Air Force Officer": {
        category: "Defence",
        icon: "✈️",
        title: "Air Force Officer",
        shortDescription:
            "Serve as an officer in the Indian Air Force in different branches and roles.",
        education: "Graduation / Relevant Qualification",
        duration: "Depends on Entry",
        workType: "Defence",
        demand: "Government Service",
        eligibility:
            "Eligibility depends on the specific Indian Air Force officer entry and branch.",
        skills: [
            "Leadership",
            "Discipline",
            "Decision Making",
            "Teamwork",
            "Communication",
            "Physical Fitness"
        ],
        subjects: [
            "General Awareness",
            "English",
            "Reasoning",
            "Mathematics",
            "Relevant Technical Subjects"
        ],
        exams: [
            "NDA",
            "AFCAT",
            "CDS"
        ],
        jobs: [
            "Flying Officer",
            "Ground Duty Officer",
            "Technical Officer",
            "Administrative Officer"
        ]
    },


    "Digital Marketer": {
        category: "Marketing",
        icon: "📱",
        title: "Digital Marketer",
        shortDescription:
            "Promote brands, products and services using digital platforms.",
        education: "Any Relevant Graduation / Digital Marketing Certification",
        duration: "3–4 Years + Certifications",
        workType: "Marketing / Digital",
        demand: "High",
        eligibility:
            "Graduation can be helpful, along with relevant digital marketing skills.",
        skills: [
            "SEO",
            "Social Media Marketing",
            "Content Marketing",
            "Analytics",
            "Communication",
            "Advertising"
        ],
        subjects: [
            "Marketing",
            "Digital Marketing",
            "Communication",
            "Business",
            "Analytics"
        ],
        exams: [
            "Digital Marketing Certifications",
            "University Entrance Exams"
        ],
        jobs: [
            "Digital Marketing Executive",
            "SEO Specialist",
            "Social Media Manager",
            "Marketing Analyst"
        ]
    },


    "UI/UX Designer": {
        category: "Design",
        icon: "🎨",
        title: "UI/UX Designer",
        shortDescription:
            "Design attractive, accessible and user-friendly digital experiences.",
        education: "B.Des / Design / Computer Applications / Relevant Course",
        duration: "3–4 Years + Portfolio",
        workType: "Design / Technology",
        demand: "High",
        eligibility:
            "Relevant education and a strong design portfolio can help.",
        skills: [
            "UI Design",
            "UX Research",
            "Figma",
            "Wireframing",
            "Prototyping",
            "Creativity"
        ],
        subjects: [
            "Design Fundamentals",
            "Visual Design",
            "UX Research",
            "Typography",
            "Interaction Design"
        ],
        exams: [
            "Design Entrance Exams",
            "Design Certifications"
        ],
        jobs: [
            "UI Designer",
            "UX Designer",
            "Product Designer",
            "Visual Designer"
        ]
    },


    "Teacher": {
        category: "Education",
        icon: "👨‍🏫",
        title: "Teacher",
        shortDescription:
            "Help students learn, develop knowledge and build important skills.",
        education: "Graduation + B.Ed / Relevant Teaching Qualification",
        duration: "Varies",
        workType: "Education",
        demand: "High",
        eligibility:
            "Qualifications depend on the teaching level and institution.",
        skills: [
            "Communication",
            "Teaching",
            "Subject Knowledge",
            "Leadership",
            "Patience",
            "Presentation"
        ],
        subjects: [
            "Education",
            "Teaching Methods",
            "Psychology",
            "Subject Specialization",
            "Communication"
        ],
        exams: [
            "CTET",
            "State TET",
            "Relevant Recruitment Exams"
        ],
        jobs: [
            "School Teacher",
            "Subject Teacher",
            "Lecturer",
            "Education Trainer"
        ]
    },


    "IAS Officer": {
        category: "Government",
        icon: "🏛️",
        title: "IAS Officer",
        shortDescription:
            "Work in public administration and contribute to government administration and policy implementation.",
        education: "Graduation",
        duration: "Graduation + Civil Services Preparation",
        workType: "Government",
        demand: "Government Service",
        eligibility:
            "Graduation and other eligibility requirements prescribed for the Civil Services Examination.",
        skills: [
            "Leadership",
            "Administration",
            "Communication",
            "Decision Making",
            "General Knowledge",
            "Analytical Thinking"
        ],
        subjects: [
            "History",
            "Geography",
            "Polity",
            "Economics",
            "Current Affairs"
        ],
        exams: [
            "UPSC Civil Services Examination"
        ],
        jobs: [
            "IAS Officer",
            "District Administration",
            "Government Administration",
            "Policy Administration"
        ]
    },


    "Engineer": {
        category: "Engineering",
        icon: "⚙️",
        title: "Engineer",
        shortDescription:
            "Apply science and mathematics to design, build and improve systems and technology.",
        education: "B.Tech / B.E.",
        duration: "4 Years",
        workType: "Engineering / Technology",
        demand: "High",
        eligibility:
            "10+2 with required subjects and applicable admission requirements.",
        skills: [
            "Mathematics",
            "Problem Solving",
            "Technical Knowledge",
            "Design",
            "Programming",
            "Analytical Thinking"
        ],
        subjects: [
            "Engineering Mathematics",
            "Physics",
            "Engineering Drawing",
            "Programming",
            "Branch-Specific Subjects"
        ],
        exams: [
            "JEE Main",
            "JEE Advanced",
            "State Engineering Entrance Exams"
        ],
        jobs: [
            "Software Engineer",
            "Mechanical Engineer",
            "Civil Engineer",
            "Electrical Engineer"
        ]
    },


    "Content Creator": {
        category: "Media",
        icon: "🎥",
        title: "Content Creator",
        shortDescription:
            "Create engaging digital content for platforms such as websites and social media.",
        education: "Any Relevant Education + Content Skills",
        duration: "Flexible",
        workType: "Media / Digital",
        demand: "Growing",
        eligibility:
            "There is no single mandatory degree; skills, creativity and portfolio are important.",
        skills: [
            "Content Writing",
            "Video Editing",
            "Communication",
            "Creativity",
            "Social Media",
            "Storytelling"
        ],
        subjects: [
            "Communication",
            "Media Studies",
            "Writing",
            "Video Production",
            "Digital Marketing"
        ],
        exams: [
            "Relevant Course Certifications"
        ],
        jobs: [
            "Content Creator",
            "YouTuber",
            "Video Creator",
            "Content Writer",
            "Social Media Creator"
        ]
    }

};


// ================= GET CAREER FROM URL =================

const params =
    new URLSearchParams(window.location.search);

const selectedCareer =
    params.get("career");


// ================= LOAD CAREER =================

function loadCareer() {

    const career =
        careers[selectedCareer];


    if (!career) {

        console.log(
            "Career not found:",
            selectedCareer
        );

        return;

    }


    // Title

    document.getElementById("careerTitle").innerText =
        career.title;


    // Category

    document.getElementById("careerCategory").innerText =
        career.category;


    // Icon

    document.getElementById("careerIcon").innerText =
        career.icon;


    // Short description

    document.getElementById("careerDescription").innerText =
        career.shortDescription;


    // Quick information

    document.getElementById("education").innerText =
        career.education;

    document.getElementById("duration").innerText =
        career.duration;

    document.getElementById("workType").innerText =
        career.workType;

    document.getElementById("demand").innerText =
        career.demand;


    // Eligibility

    document.getElementById("eligibility").innerText =
        career.eligibility;


    // Skills

    const skillsContainer =
        document.getElementById("skills");

    skillsContainer.innerHTML = "";

    career.skills.forEach(function(skill) {

        const span =
            document.createElement("span");

        span.innerText = skill;

        skillsContainer.appendChild(span);

    });


    // Subjects

    const subjectsContainer =
        document.getElementById("subjects");

    subjectsContainer.innerHTML = "";

    career.subjects.forEach(function(subject) {

        const li =
            document.createElement("li");

        li.innerText = subject;

        subjectsContainer.appendChild(li);

    });


    // Exams

    const examsContainer =
        document.getElementById("exams");

    examsContainer.innerHTML = "";

    career.exams.forEach(function(exam) {

        const li =
            document.createElement("li");

        li.innerText = exam;

        examsContainer.appendChild(li);

    });


    // Jobs

    const jobsContainer =
        document.getElementById("jobRoles");

    jobsContainer.innerHTML = "";

    career.jobs.forEach(function(job) {

        const li =
            document.createElement("li");

        li.innerText = job;

        jobsContainer.appendChild(li);

    });

}


// ================= SAVE CAREER =================

function saveCareer() {

    if (!selectedCareer) {
        return;
    }


    let savedCareers =
        JSON.parse(
            localStorage.getItem("savedCareers")
        ) || [];


    if (
        !savedCareers.includes(selectedCareer)
    ) {

        savedCareers.push(selectedCareer);

        localStorage.setItem(
            "savedCareers",
            JSON.stringify(savedCareers)
        );

        alert(
            selectedCareer +
            " saved successfully!"
        );

    } else {

        alert(
            selectedCareer +
            " is already saved."
        );

    }

}


// ================= START =================

loadCareer();
