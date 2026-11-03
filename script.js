let menu = document.getElementById("nav-links");
let menuBtn = document.getElementById("menu-btn");

function toggleMenu() {
  menu.classList.toggle("open");
  menuBtn.setAttribute("aria-expanded", menu.classList.contains("open"));
}

function closeMenu() {
  menu.classList.remove("open");
  menuBtn.setAttribute("aria-expanded", "false");
}


function filterProjects(category, button) {
  let cards = document.getElementsByClassName("card");
  for (let i = 0; i < cards.length; i++) {
    let show = category == "all" || cards[i].classList.contains(category);
    cards[i].style.display = show ? "block" : "none";
  }

  let buttons = document.getElementsByClassName("filter-btn");
  for (let i = 0; i < buttons.length; i++) {
    buttons[i].classList.remove("active");
    buttons[i].setAttribute("aria-pressed", "false");
  }
  button.classList.add("active");
  button.setAttribute("aria-pressed", "true");
}

function checkForm() {
  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let message = document.getElementById("message").value;
  let result = document.getElementById("form-message");

  if (name == "" || email == "" || message == "") {
    result.innerHTML = "Please fill in all the fields.";
    result.style.color = "#c0392b";
  } else if (email.indexOf("@") == -1 || email.indexOf(".") == -1) {
    result.innerHTML = "Please enter a valid email.";
    result.style.color = "#c0392b";
  } else {
    result.innerHTML = "Thank you, " + name + "! (This is only a demo form, so the message is not really sent.)";
    result.style.color = "#1e7b4c";
    document.querySelector("form").reset();
  }
  return false;
}

window.onscroll = function () {
  let sections = document.getElementsByTagName("section");
  let current = "home";
  for (let i = 0; i < sections.length; i++) {
    if (window.scrollY >= sections[i].offsetTop - 100) {
      current = sections[i].id;
    }
  }

  let links = document.getElementsByClassName("nav-link");
  for (let i = 0; i < links.length; i++) {
    links[i].classList.toggle("active", links[i].getAttribute("href") == "#" + current);
  }
};

document.getElementById("year").innerHTML = new Date().getFullYear();
