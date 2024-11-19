
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobile-menu');
const closeBtn = document.getElementById('close-btn');

// Toggle open/close for mobile menu
hamburger.addEventListener('click', () => {
    mobileMenu.classList.toggle('active');
    hamburger.classList.toggle('active');
});

closeBtn.addEventListener('click', () => {
    mobileMenu.classList.remove('active');
    hamburger.classList.remove('active');
});


let index = 0;
const testimonials = document.querySelectorAll('.testimonial-card');
const totalTestimonials = testimonials.length;

function showNextTestimonial() {
    testimonials[index].style.display = 'none';  // Hide current testimonial
    index = (index + 1) % totalTestimonials;  // Cycle through testimonials
    testimonials[index].style.display = 'block';  // Show next testimonial
}

setInterval(showNextTestimonial, 3000); // Auto slide every 3 seconds



document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault();
    
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;
    
    // Simple validation
    if (name === "" || email === "" || message === "") {
        alert("Please fill in all fields.");
        return;
    }

    // If valid, show a success message
    alert("Your message has been sent successfully!");
    
    // Clear form
    document.getElementById("contact-form").reset();
});

