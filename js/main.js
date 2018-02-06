const studentsContainer = document.getElementsByClassName("student-list");
const students = document.getElementsByClassName("student-item");

window.addEventListener("load", () => {
  for (let i = 0; i < students.length; i++) {
    i < 10
      ? (students[i].style.display = "block")
      : (students[i].style.display = "none");
  }
});
