const studentList = document.getElementsByClassName("student-list");
const student = document.getElementsByClassName("student-item");
const pages = document.getElementsByTagName("a");

window.addEventListener("load", () => {
  for (let i = 0; i < student.length; i++) {
    i < 10
      ? (student[i].style.display = "block")
      : (student[i].style.display = "none");
  }
  appendPageLinks(student);
});

function showPage(pageNumber, students) {
  for (let i = 0; i < students.length; i++) {
    students[i].style.display = "none";
    if (i < pageNumber + 0 && i >= pageNum + 0 - 10) {
      students[i].style.display = "block";
    }
  }
}

function appendPageLinks(students) {
  let pageNum = Math.ceil(students.length / 10);
  let pageLink = '<div class="pagination"><ul>';
  for (let i = 0; i < pageNum + 1; i++) {
    pageLink += `<li><a class="active" href="#">${i}</a>`;
  }
  pageLink += "</ul></div>";

  studentList[0].insertAdjacentHTML("afterend", pageLink);
  pages[0].className = "active";

  for (let a = 0; a < pageNum; a++) {
    pages[a].addEventListener("click", e => {
      showPage(this.innerHTML, students);
      for (let b = 0; b < pageNum; b++) {
        pages[b].className = "";
      }
      this.className = "active";
    });
  }
}
