const reveals = document.querySelectorAll(".section, .card, .contact-item");

function revealOnScroll() {
  const triggerBottom = window.innerHeight * 0.85;

  reveals.forEach((element) => {
    const boxTop = element.getBoundingClientRect().top;

    if (boxTop < triggerBottom) {
      element.classList.add("reveal", "active");
    }
  });
}

window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);

function submitForm(event) {
  event.preventDefault();
  alert("Thank you. Your message has been received.");
  return false;
}