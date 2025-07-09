
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
    event.preventDefault();

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
      nameError.textContent = "Name is required.";
      isValid = false;
    }

    // Validate Email
    if (emailInput.value.trim() === "") {
      emailError.textContent = "Email is required.";
      isValid = false;
    }

    // Validate Message
    if (messageInput.value.trim() === "") {
      messageError.textContent = "Message is required.";
      isValid = false;
    }

    if (isValid) {
      console.log("Form submitted successfully!");
      alert("Form submitted successfully!"); 
      this.reset();
    } else {
      console.log("Form validation failed.");
    }
  });
