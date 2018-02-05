const page = document.querySelector(".page");
const studentList = document.querySelector(".student-list");
const eachStudent = document.querySelectorAll(".student-item");
const studentDetails = document.querySelector(".student-details");
const navlink = document.querySelector(".navlink");

//Set the pages variable
const currentPage = 1;
let numPages = 0;
const studentsPerPage = 4;
let index;

//Finding the number of students
const numberOfStudents = () => {
  const numberOfStudents = eachStudent.length;
  return numberOfStudents;
};

//Hiding all the students
const hideAll = () => {
  for (let i = 0; i < numberOfStudents(); i++) {
    eachStudent[i].style.display = "none";
  }
};

// Display only the 10 first items on the page
function showStudents(number) {
  for (let i = 0; i < studentsPerPage; i++) {
    index = number * studentsPerPage - studentsPerPage + i;
    eachStudent[index].style.display = "block";
    console.log(index);
  }
}
