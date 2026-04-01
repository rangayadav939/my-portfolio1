 // Welcome message
window.onload = function() {
    alert("Welcome to my portfolio website!");
};

// Smooth scroll effect (optional if you add navbar later)
document.querySelectorAll("a").forEach(anchor => {
    anchor.addEventListener("click", function(e) {
        if (this.getAttribute("href").startsWith("#")) {
            e.preventDefault();
            document.querySelector(this.getAttribute("href")).scrollIntoView({
                behavior: "smooth"
            });
        }
    });
});

// Section hover animation
const sections = document.querySelectorAll("section");

sections.forEach(section => {
    section.addEventListener("mouseover", () => {
        section.style.transform = "scale(1.03)";
        section.style.transition = "0.3s";
    });

    section.addEventListener("mouseout", () => {
        section.style.transform = "scale(1)";
    });
});