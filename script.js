
function typeWriter() {
  const text = "Muhammad Safdar";
  const element = document.getElementById("nameText");
  let i = 0;
  element.innerHTML = "";

  function type() {
    if (i < text.length) {
      element.innerHTML += text.charAt(i);
      i++;
      setTimeout(type, 100);
    }
  }
  type();
}

function animateCounters() {
  const counters = document.querySelectorAll("[data-target]");

  counters.forEach((counter) => {
    const target = parseInt(counter.getAttribute("data-target"));
    const increment = target / 100;
    let current = 0;

    const updateCounter = () => {
      if (current < target) {
        current += increment;
        counter.textContent = Math.floor(current);
        requestAnimationFrame(updateCounter);
      } else {
        counter.textContent = target;
      }
    };

    updateCounter();
  });
}

window.addEventListener("load", () => {
  setTimeout(typeWriter, 500);
  setTimeout(animateCounters, 2000);
});

document
  .getElementById("contactForm")
  .addEventListener("submit", function (event) {

    let isValid = true;

    // Get input elements and error message elements
    const nameInput = document.getElementById("name");
    const emailInput = document.getElementById("email");
    const messageInput = document.getElementById("message");

    const nameError = document.getElementById("nameError");
    const emailError = document.getElementById("emailError");
    const messageError = document.getElementById("messageError");

    nameError.textContent = "";
    emailError.textContent = "";
    messageError.textContent = "";

    // Validate Name
    if (nameInput.value.trim() === "") {
      event.preventDefault();
      nameError.textContent = "Name is required.";
      isValid = false;
    }

    // Validate Email
    if (emailInput.value.trim() === "") {
      event.preventDefault();
      emailError.textContent = "Email is required.";
      isValid = false;
    }

    // Validate Message
    if (messageInput.value.trim() === "") {
      event.preventDefault();
      messageError.textContent = "Message is required.";
      isValid = false;
    }

    if (isValid) {
      console.log("Form submitted successfully!");
    } else {
      console.log("Form validation failed.");
    }
  });

  document.addEventListener('DOMContentLoaded', function() {
  const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
  const mobileMenu = document.querySelector('.mobile-menu');

  // Handle mobile menu toggle
  mobileMenuBtn.addEventListener('click', function() {
    mobileMenu.classList.toggle('hidden');
  });

  // Close mobile menu when clicking on a link
  const mobileLinks = document.querySelectorAll('.mobile-menu a');
  mobileLinks.forEach(link => {
    link.addEventListener('click', function() {
      mobileMenu.classList.add('hidden');
    });
  });

  // Smooth scroll for navigation links
  const navLinks = document.querySelectorAll('a[href^="#"]');
  navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });
}); 