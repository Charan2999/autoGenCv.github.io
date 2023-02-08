const form = document.querySelector("form");
form.addEventListener("submit", handleSubmit);

// import all the fields from the form.
// eg.
// const name = document.getElementById("name");

// function handleSubmit(e) {
//   e.preventDefault();
function handleSubmit(e) {
  e.preventDefault();

  var name = document.getElementById("name").value;
  document.getElementById("display-name").innerHTML = name;
  document.getElementById("name").value = '';
  //   here get the values from the form and set it to the resume
  // eg.
  //   const name_resume = document.getElementById("name_resume");
  //   name_resume.innerHTML = name.value;
  //   similarly for all the other fields

  var email = document.getElementById("Email").value;
  document.getElementById("display-Email").innerHTML = email;
  document.getElementById("Email").value = '';


  var phone = document.getElementById("Phone").value;
  document.getElementById("display-Phone").innerHTML = phone;
  document.getElementById("Phone").value = '';


  var github = document.getElementById("Github").value;
  document.getElementById("display-Github").innerHTML = github;
  document.getElementById("Github").value = '';

  var linkedin = document.getElementById("Linkedin").value;
  document.getElementById("display-Linkedin").innerHTML = linkedin;
  document.getElementById("Linkedin").value = '';

  var degree = document.getElementById("Degree").value;
  document.getElementById("display-Degree").innerHTML = degree;
  document.getElementById("Degree").value = '';

  var college = document.getElementById("College").value;
  document.getElementById("display-College").innerHTML = college;
  document.getElementById("College").value = '';

  var startingyear = document.getElementById("Starting Year").value;
  document.getElementById("display-Starting Year").innerHTML = startingyear;
  document.getElementById("Starting Year").value = '';


  var passingYear = document.getElementById("Passing Year").value;
  document.getElementById("display-Passing Year").innerHTML = passingYear;
  document.getElementById("Passing Year").value = '';

  var cgpa = document.getElementById("CGPA").value;
  document.getElementById("display-CGPA").innerHTML = cgpa;
  document.getElementById("CGPA").value = '';


  var skills = document.getElementById("Skills").value;
  document.getElementById("display-Skills").innerHTML = skills;
  document.getElementById("Skills").value = '';

 
  var project = document.getElementById("Project").value;
  document.getElementById("display-Project").innerHTML = project;
  document.getElementById("Project").value = '';

  var description = document.getElementById("Description").value;
  document.getElementById("display-Description").innerHTML =description;
  document.getElementById("Description").value = '';

  var link = document.getElementById("Link").value;
  document.getElementById("display-Link").innerHTML = link;
  document.getElementById("Link").value = '';

  var company = document.getElementById("Company").value;
  document.getElementById("display-Company").innerHTML = company;
  document.getElementById("Company").value = '';

  var designation = document.getElementById("Designation").value;
  document.getElementById("display-Designation").innerHTML = designation;
  document.getElementById("Designation").value = '';

  var duration = document.getElementById("Duration").value;
  document.getElementById("display-Duration").innerHTML = duration;
  document.getElementById("Duration").value = '';

  var description = document.getElementById("description").value;
  document.getElementById("display-description").innerHTML = description;
  document.getElementById("description").value = '';
  }
  
 function handleLeft() {
    const left = document.querySelector(".left");
    const right = document.querySelector(".right");
    const print = document.querySelector(".print");
    left.style.display = "none";
    right.style.width = "100%";
    print.style.display = "block";
  };
function handlePrint() {
  const right = document.querySelector(".right");
  const left = document.querySelector(".left");
  const print = document.querySelector(".print");
  // write more codes here

  window.print();
  right.classList.add("reduced");
  left.classList.remove("hidden");
  print.classList.add("hidden");
}


