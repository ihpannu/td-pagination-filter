const studentList = document.getElementsByClassName(".student-list");
const student = document.getElementsByClassName(".student-item");
const pages = document.getElementsByTagName("a");

window.addEventListener("load", () => {
  for (let i = 0; i < studentList.length; i++) {
    i < 10
      ? (students[i].style.display = "block")
      : (student[i].style.display = "none");
  }
});

function showPage(students, pageNum) {
  for (let i = 0; i < students.length; i++) {
    students[i].style.display = "block";
  }
}
