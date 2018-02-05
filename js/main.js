const studentContainer = document.getElementsByClassName("student-list");
const students = document.getElementsByClassName("student-item");
const pages = document.getElementsByTagName("a");

// const hideAll = () => {
//   for (let i = 0; i < students.length; i++) {
//     students[i].style.display = "none";
//   }
//   return hideAll;
// };

function showPage(pageNumber, studentList) {
  for (let i = 0; i < students.length; i++) {
    students[i].style.display = "none";
    if (i < pageNumber + 0 && i > pageNumber + 0 - 10) {
      students[i].style.display = "block";
    }
  }
}
