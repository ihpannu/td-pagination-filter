const studentList = document.getElementsByClassName(".student-list");
const students = document.getElementsByClassName(".student-item");
const page = document.getElementsByClassName(".page");

window.addEventListener("load", () => {
  for (let i = 0; i < students.length; i++) {
    if (i < 10) {
      students.style.display = "block";
    } else {
      students.style.display = "none";
    }
  }
});
