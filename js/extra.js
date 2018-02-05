const students = document.getElementsByClassName("student-item");
const pages = document.getElementsByTagName("a");
const ulContainer = document.getElementsByClassName("student-list");

window.addEventListener("load", function() {
  for (var i = 0; i < students.length; i++) {
    if (i < 10) {
      students[i].style.display = "block";
    } else {
      students[i].style.display = "none";
    }
  }
  appendPageLinks(students);
  searchList();
});

function showPage(pageNumber, studentList) {
  for (let i = 0; i < studentList.length; i++) {
    studentList[i].style.display = "none";
    //TODO Find out what to put in if statement so it displays 10 students per page
    if (i < pageNumber + 0 && i >= pageNumber + 0 - 10) {
      studentList[i].style.display = "block";
    }
  }
}

function appendPageLinks(studentList) {
  let pageNum = Math.ceil(studentList.length / 10);
  let pageLink = '<div class="pagination"><ul>';
  for (let i = 1; i < pageNum + 1; i++) {
    pageLink += '<li><a href="#">' + i + "</a></li>";
  }
  pageLink += "</ul></div>";

  // paginationContainer[0].innerHTML = pageLink;
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

function searchList() {
  const searchPlace = document.querySelector("div.page-header");
  searchPlace.insertAdjacentHTML(
    "beforeend",
    '<div class="student-search"><input placeholder="Search for students..."><button>Search</button></div>'
  );

  const searchButton = document.getElementsByTagName("button");
  searchButton[0].addEventListener("click", function() {
    const searchInput = document.getElementsByTagName("input");
    let searchValue = searchInput[0].value;
    const studentNames = document.getElementsByTagName("h3");
    const studentEmails = document.getElementsByClassName("email");
    let studentMatchArr = [];

    document.querySelector(".pagination").remove();

    for (let i = 0; i < students.length; i++) {
      students[i].style.display = "none";

      const indexOfStudents = studentNames[i].innerHTML
        .toUpperCase()
        .indexOf(searchValue.toUpperCase());
      const indexOfEmails = studentEmails[i].innerHTML
        .toUpperCase()
        .indexOf(searchValue.toUpperCase());
      if (indexOfStudents > -1 || indexOfEmails > -1) {
        studentMatchArr.push(students[i]);
      }
    }

    const studentsFoundDiv = document.getElementsByClassName("found");
    if (searchValue.length === 0) {
      appendPageLinks(students);
    }

    if (studentMatchArr.length > 0) {
      for (var i = 0; i < studentMatchArr.length; i++) {
        studentMatchArr[i].style.display = "block";
      }
      if (studentsFoundDiv.length === 1) {
        studentsFoundDiv[0].remove();
      }
    } else {
      if (studentsFoundDiv.length === 0) {
        ulContainer[0].insertAdjacentHTML(
          "afterend",
          "<div class='found'>No Student's Found</div>"
        );
      }
    }
  });
}
