






const contactForm = document.querySelector("#contact form");
const formMessage = document.querySelector(".form-message");

contactForm.addEventListener("submit", (event) => {
	event.preventDefault();

	if (!contactForm.checkValidity()) {
		contactForm.reportValidity();
		return;
	}

	const name = document.querySelector("#name").value.trim();
	formMessage.textContent = `Thank you, ${name}! Your message is ready to send.`;
	formMessage.className = "form-message success";
	contactForm.reset();
});