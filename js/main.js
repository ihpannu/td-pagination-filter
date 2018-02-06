const ulContainer = document.getElementsByClassName("student-list");
const students = document.getElementsByClassName("student-item");
const pages = document.getElementsByTagName("a");

// This shows only 10 students when page loads
window.addEventListener("load", () => {
  for (let i = 0; i < students.length; i++) {
    // Used Ternary Operator instead of if and else
    i < 10
      ? (students[i].style.display = "block") // if
      : (students[i].style.display = "none"); // else
  }
  // This appends the pagination to page
  appendPageLinks(students);
  searchList();
});

// Function to show only 10 students per page
function showPage(pageNumber, studentList) {
  // loop through studentlist and hide the students
  for (let i = 0; i < studentList.length; i++) {
    // this hides the students
    studentList[i].style.display = "none";
    // this statement checks if which student to show
    if (i < pageNumber + 0 && i >= pageNumber + 0 - 10) {
      // If sets the student to block
      studentList[i].style.display = "block";
    }
  }
}

function appendPageLinks(studentList) {
  let pageNum = Math.ceil(studentList.length / 10);
  let pageLink = '<div class="pagination"><ul>';
  for (let i = 1; i < pageNum + 1; i++) {
    pageLink += `<li><a class="active" href="#">${i}</a></li>`;
  }
  pageLink += "</ul></div>";

  ulContainer[0].insertAdjacentHTML("afterend", pageLink);

  pages[0].className = "active";

  for (let p = 0; p < pageNum; p++) {
    pages[p].addEventListener("click", function(e) {
      showPage(this.innerHTML, studentList);
      for (let y = 0; y < pageNum; y++) {
        pages[y].className = "";
      }
      this.className = "active";
    });
  }
}
