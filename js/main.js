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

function showPage(pageNumber, studentLists) {
  for (let i = o; i < studentLists.length; i++) {
    studentLists[i].style.display = "none";

    if (i < pageNumber + 0 && i >= pageNumber + 0 - 10) {
      studentList[i].style.display = "block";
    }
  }
}

function appendPageLinks(studentLists) {
  let pageNumber = Math.ceil(studentLists.length / 10);
  let pageLinks = `<div class="pagination">`;
  for (let i = 0; i < pageNumber + 1; i++) {
    pageLinks += `<li> <a href="#">  ${i}<a/> <li>`;
  }
}
