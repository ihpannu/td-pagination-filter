const studentContainer = document.getElementsByClassName("student-list");
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

// This function creates the page links and appends the list to the page
function appendPageLinks(studentList) {
  // This determine how many pages required for student list
  let pageNum = Math.ceil(studentList.length / 10);
  // THis creates page link section
  let pageLink = '<div class="pagination"><ul>';
  for (let i = 1; i < pageNum + 1; i++) {
    pageLink += `<li><a class="active" href="#">${i}</a></li>`;
  }
  pageLink += "</ul></div>";
  // This appends the pageLink to page section
  studentContainer[0].insertAdjacentHTML("afterend", pageLink);

  pages[0].className = "active";

  // This loops over the pageNum and adds click event
  // also class active and takes off from not active links
  // for each link
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
