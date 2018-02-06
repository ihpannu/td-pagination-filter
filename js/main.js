const studentContainer = document.getElementsByClassName("student-list");
const students = document.getElementsByClassName("student-item");
const pages = document.getElementsByTagName("a");

window.addEventListener("load", () => {
  for (let i = 0; i < students.length; i++) {
    i < 10
      ? (students[i].style.display = "block")
      : (students[i].style.display = "none");
  }

  appendPageLinks(students);
});

function showPage(pageNumber, studentList) {
  for (let i = 0; i < students.length; i++) {
    students[i].style.display = "none";
    if (i < pageNumber + 0 && i > pageNumber + 0 - 10) {
      students[i].style.display = "block";
    }
  }
}
