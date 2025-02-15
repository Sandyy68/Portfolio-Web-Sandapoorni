let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height){
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ' ]').classList.add('active');     
            });
        }

    })

}

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

// Initialize EmailJS
emailjs.init("_YQoVmQJ7397ufOzM"); // Replace with your EmailJS User ID

// Add event listener to the form
document.getElementById("contact-form").addEventListener("submit", function (event) {
    event.preventDefault();

    // Collect form data

    const templateParams = {
        fullName: document.getElementById("full-name").value,
        email: document.getElementById("email").value,
        phone: document.getElementById("phone").value,
        subject: document.getElementById("subject").value,
        message: document.getElementById("message").value,
    };
    console.log(templateParams);
    

    // Send email using EmailJS
    emailjs.send("service_fjenq1a", "template_u5rp38w", templateParams)
        .then(function (response) {
            Swal.fire({
                title: "Success!",
                text: "Your message has been sent successfully!",
                icon: "success"
            });
            console.log("Success:", response.status, response.text);

            // Clear form fields
            document.getElementById("full-name").value = "";
            document.getElementById("email").value = "";
            document.getElementById("phone").value = "";
            document.getElementById("subject").value = "";
            document.getElementById("message").value = "";
        })
        .catch(function (error) {
            Swal.fire({
                icon: "error",
                title: "Error!",
                text: "Failed to send the message. Please try again later.",
            });
            console.error("Error:", error);
        });
});