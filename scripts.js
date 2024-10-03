// JavaScript for the sliding effect on the sections

document.addEventListener('DOMContentLoaded', function () {
    const infoTitle = document.getElementById('info-title');
    const infoContent = document.getElementById('info-content');

    // Content for About and Contact sections
    const sections = {
        "about": {
            title: "About the Web Developer",
            content: "The web developer, Ntiganzwa Kagimba Freedauce, is a university student in Rwanda and a committed Christian. Inspired by faith, he strives to leave a legacy of love, kindness, and positive impact through his work."
        },
        "contact": {
            title: "Contact Information",
            content: "Email: <a href='mailto:ntiganzakt@gmail.com'>ntiganzakt@gmail.com</a><br>Phone: +250780873647"
        }
    };

    // Event listeners for navigation links
    document.getElementById('about-link').addEventListener('click', function () {
        showContent('about');
    });
    document.getElementById('contact-link').addEventListener('click', function () {
        showContent('contact');
    });

    // Function to show content based on section
    function showContent(section) {
        const data = sections[section];
        infoTitle.textContent = data.title;
        infoContent.innerHTML = data.content; // Use innerHTML to parse HTML content (like email link)
        infoContent.style.display = 'block'; // Show the content below the button
        infoContent.classList.add('slide'); // Add slide class for effect
    }
});

// Function to toggle more info on love sections
function toggleMore(section) {
    const moreInfo = document.querySelector(`.${section}`);
    if (moreInfo.style.display === "none") {
        moreInfo.style.display = "block";
    } else {
        moreInfo.style.display = "none";
    }
}
