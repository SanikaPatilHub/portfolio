
const spans=document.querySelectorAll(`.progress_bar span`);

spans.forEach((span)=>{
    span.style.width=span.dataset.width;
    span.innerHTML=span.dataset.width;
});


   
    //tOGGLE MENU
function toggleMenu() {
  document.getElementById("menuList").classList.toggle("active");
}

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



