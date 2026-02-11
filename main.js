

const hamburger = document.getElementById("hamburger");
const menuList = document.getElementById("menuList");




// toggle menu on hamburger click
hamburger.addEventListener("click", () => {
  menuList.classList.toggle("active");
  hamburger.classList.toggle("open");
});






// close menu when any link is clicked
document.querySelectorAll("#menuList a").forEach(link => {
  link.addEventListener("click", () => {
    menuList.classList.remove("active");
    hamburger.classList.remove("open");
  });
});




// emailjs
document.getElementById("contact-form").addEventListener("submit", function (e) {
  e.preventDefault();

  emailjs.sendForm(
    "service_portfolio001",   
    "template_sanika03",     
    this
  )
  .then(function () {
    alert("Message sent successfully ");
    document.getElementById("contact-form").reset();
  }, function (error) {
    console.log("FAILED...", error);
    alert("Failed to send message ");
  });
});



const toggleBtn = document.getElementById("themeToggle");
const themeIcon = document.getElementById("themeIcon");

// Load saved theme
if (localStorage.getItem("theme") === "light") {
  document.body.classList.add("light");
  themeIcon.classList.replace("fa-moon", "fa-sun");
}

// Toggle theme
toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("light");

  if (document.body.classList.contains("light")) {
    themeIcon.classList.replace("fa-moon", "fa-sun");
    localStorage.setItem("theme", "light");
   
  } else {
    themeIcon.classList.replace("fa-sun", "fa-moon");
    localStorage.setItem("theme", "dark");
 
     
  }
});






