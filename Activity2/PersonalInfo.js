
let bsit_students = {
    student1: {
        studentName: "Jyles Jea Gagan",
        idNumber: "1001",
        yearLevel: "2",
        program: "BSIT"
    },

    student2: {
        studentName: "Shekinah Dale Kimayong",
        idNumber: "4325",
        yearLevel: "2",
        program: "BSIT"
    },

    student3: {
        studentName: "Raven Ashley Villaver",
        idNumber: "6879",
        yearLevel: "2",
        program: "BSIT"
    },

    student4: {
        studentName: "Shadrach Vincent Dela Cruz",
        idNumber: "6753",
        yearLevel: "2",
        program: "BSIT"
    }
};


const enrolledCourses = {
    Subject1: "Science and Technology and Society",
    Subject2: "Pathfit4",
    Subject3: "Arts Appreciation",
    Subject4: "Networking 1",
    Subject5: "Event-Driven Programming",
    Subject6: "Integrative Programming and Technologies",
    Subject7: "Application Development and Emerging Technologies"
};


// Function to get letter grade
function getLetterGrade(grade) {
    if (grade >= 98 && grade <= 100) {
        return "A";
    } else if (grade >= 94) {
        return "A-";
    } else if (grade >= 90) {
        return "B+";
    } else if (grade >= 87) {
        return "B";
    } else if (grade >= 83) {
        return "B-";
    } else if (grade >= 80) {
        return "C+";
    } else if (grade >= 77) {
        return "C";
    } else if (grade >= 75) {
        return "D";
    } else {
        return "F";
    }
}


// Student 1 Grades
const grades1 = {
    Subject1: 90,
    Subject2: 92,
    Subject3: 88,
    Subject4: 95,
    Subject5: 80,
    Subject6: 90,
    Subject7: 87
};


// Student 2 Grades
const grades2 = {
    Subject1: 90,
    Subject2: 88,
    Subject3: 92,
    Subject4: 95,
    Subject5: 93,
    Subject6: 85,
    Subject7: 89
};


// Student 3 Grades
const grades3 = {
    Subject1: 95,
    Subject2: 87,
    Subject3: 90,
    Subject4: 92,
    Subject5: 91,
    Subject6: 89,
    Subject7: 95
};


// Student 4 Grades
const grades4 = {
    Subject1: 93,
    Subject2: 88,
    Subject3: 92,
    Subject4: 96,
    Subject5: 90,
    Subject6: 87,
    Subject7: 94
};


// Function to display student information and grades
function displayStudent(student, grades, number) {

    console.log("\n===== STUDENT " + number + " =====");

    console.log("Student Name: " + student.studentName);
    console.log("ID Number: " + student.idNumber);
    console.log("Year Level: " + student.yearLevel);
    console.log("Program: " + student.program);


    console.log("\n===== STUDENT " + number + " ENROLLED COURSES =====");

    console.log("Subject 1: " + enrolledCourses.Subject1 +
        " - Grade: " + grades.Subject1 +
        " / Letter Grade: " + getLetterGrade(grades.Subject1));

    console.log("Subject 2: " + enrolledCourses.Subject2 +
        " - Grade: " + grades.Subject2 +
        " / Letter Grade: " + getLetterGrade(grades.Subject2));

    console.log("Subject 3: " + enrolledCourses.Subject3 +
        " - Grade: " + grades.Subject3 +
        " / Letter Grade: " + getLetterGrade(grades.Subject3));

    console.log("Subject 4: " + enrolledCourses.Subject4 +
        " - Grade: " + grades.Subject4 +
        " / Letter Grade: " + getLetterGrade(grades.Subject4));

    console.log("Subject 5: " + enrolledCourses.Subject5 +
        " - Grade: " + grades.Subject5 +
        " / Letter Grade: " + getLetterGrade(grades.Subject5));

    console.log("Subject 6: " + enrolledCourses.Subject6 +
        " - Grade: " + grades.Subject6 +
        " / Letter Grade: " + getLetterGrade(grades.Subject6));

    console.log("Subject 7: " + enrolledCourses.Subject7 +
        " - Grade: " + grades.Subject7 +
        " / Letter Grade: " + getLetterGrade(grades.Subject7));
}


// Display all students
displayStudent(bsit_students.student1, grades1, 1);
displayStudent(bsit_students.student2, grades2, 2);
displayStudent(bsit_students.student3, grades3, 3);
displayStudent(bsit_students.student4, grades4, 4);
