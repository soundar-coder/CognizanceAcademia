const form = document.getElementById("testimonialForm");
const container = document.getElementById("testimonialContainer");
const statusMsg = document.getElementById("statusMsg");

form.addEventListener("submit", function(e) {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const role = document.getElementById("role").value;
  const rating = document.getElementById("rating").value;
  const message = document.getElementById("message").value;

  statusMsg.textContent = "Thank you! Your testimonial will appear after review.";

  setTimeout(() => {
    const card = document.createElement("div");
    card.className = `testimonial-card ${role}`;

    card.innerHTML = `
      <div class="stars">${"★".repeat(rating)}${"☆".repeat(5-rating)}</div>
      <p>"${message}"</p>
      <h4>${name}</h4>
      <span>${role.charAt(0).toUpperCase() + role.slice(1)}</span>
    `;

    container.appendChild(card);
    statusMsg.textContent = "";
    form.reset();
  }, 3000);
});
