const users = [];

function showSection(sectionId) {
    // Hide all sections
    var sections = document.querySelectorAll('.content-section');
    sections.forEach(function(section) {
        section.style.display = 'none';
    });

    // Show the requested section
    var sectionToShow = document.getElementById(sectionId);
    if (sectionToShow) {
        sectionToShow.style.display = 'block';
    }
}

// Function to handle login
function login() {
    var username = document.getElementById('login-username').value;
    var password = document.getElementById('login-password').value;
    // Implement login logic here
    console.log("Login with username: " + username + " and password: " + password);
}

// Function to handle registration
function register() {
    var username = document.getElementById('register-username').value;
    var password = document.getElementById('register-password').value;
    // Implement registration logic here
    console.log("Register with username: " + username + " and password: " + password);
}