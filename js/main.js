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

// function appendPageLinks(studentList) {
//   let pageNum = Math.ceil(studentList.length / 10);
//   let pageLink = '<div class="pagination"> <ul>';
//   for (let i = 0; i < pageNum + 1; i++) {
//     pageNum += '<li><a href="#"> ' + i + "</a></li>";
//   }
//   pageNum += "</ul></div>";

//   studentContainer[0].insertAdjacentHTML("afterend", pageLink);

//   pages[0].className = "active";
//   for (let b = 0; b < pageNum; b++) {
//     pages[b].addEventListener("click", e => {
//       showPage(this.innerHTML, studentList);
//       for (let c = 0; c < pageNum; c++) {
//         pages[c].className = "";
//       }
//       this.className = "active";
//     });
//   }
// }
