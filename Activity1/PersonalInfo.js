const personalInfo = {
    studentName: "Margarette Bier",
    idNumber: "6749",
    yearLevel: "2",
    program: "BSIT",
};


const enrolledCourses = {
    Subject1: "Science and Technology and Society",
    Subject2: "Pathfit4",
    Subject3: "Arts Apprecitaion",
    Subject4: "Networking 1",
    Subject5: "Event-Driven Programming",
    Subject6: "Integrative Programming and Technologies",
    Subject7: "Application Development and Emerging Technologies"

};

   function getLetterGrade(grade) {
    if (grade <= 98 && grade >= 100) {
        return "A";
    } else if (grade <= 94 && grade >= 98) {
        return "A-";
    } else if (grade <= 90 && grade >= 94) {
        return "B+";
    } else if (grade <= 87 && grade >= 90) {
        return "B";
    } else if (grade <= 83 && grade >= 87) {
        return "B-";
    } else if (grade <= 80 && grade >= 83) {
        return "C+";
    } else if (grade <= 77 && grade >= 80) {
        return "C";
    } else if (grade <= 75 && grade >= 77) {
        return "D";
    } else {
        return "F";
    }
};

const grades   = {
    Subject1: 90,
    Subject2: 92,
    Subject3: 88,
    Subject4: 95,
    Subject5: 80,
    Subject6: 90,
    Subject7: 87
};


console.log("=====Personal Information=====");
console.log("StudentName: " + personalInfo.studentName);
console.log("ID Number: " + personalInfo.idNumber);
console.log("Year Level: " + personalInfo.yearLevel);
console.log("Program: " + personalInfo.program);


//enrolled courses
console.log("\n=====ENROLLED COURSES=====")
console.log("Subject 1: " + enrolledCourses.Subject1 + 
    " - Grade: " + grades.Subject1 + 
    " / Letter Grade: " + getLetterGrade(grades.Subject1));
console.log("Subject 2 " + enrolledCourses.Subject2 +
    "- Grade: " + grades.subject2 +
    "/Letter Grade: " + getLetterGrade(grades.Subject2)
);
console.log ("Subject 3: " + enrolledCourses.Subject3 +
    "- Grade: " + grades.subject3 +
    "/Letter Grade: " + getLetterGrade(grades.Subject3)
);
console.log("Subject 4: " + enrolledCourses.Subject4 +
    " - Grade: " + grades.Subject4 +
    " / Letter Grade: " + getLetterGrade(grades.Subject4)
);
console.log("Subject 5: " + enrolledCourses.Subject5 +
    " - Grade: " + grades.Subject5 +
    " / Letter Grade: " + getLetterGrade(grades.Subject5)
);
console.log("Subject 6: " + enrolledCourses.Subject6 +
    " - Grade: " + grades.Subject6 +
    " / Letter Grade: " + getLetterGrade(grades.Subject6)
);
console.log("Subject 7: " + enrolledCourses.Subject7 +
    " - Grade: " + grades.Subject7 +
    " / Letter Grade: " + getLetterGrade(grades.Subject7)
);

    












