const users = [];

function showSection(sectionId) {
    const sections = document.querySelectorAll('.content-section');
    sections.forEach(section => {
        if (section.id === sectionId) {
            section.classList.add('active');
        } else {
            section.classList.remove('active');
        }
    });
}

function login() {
    const username = document.getElementById('login-username').value;
    const password = document.getElementById('login-password').value;

    const user = users.find(user => user.username === username && user.password === password);

    if (user) {
        alert('Login successful!');
    } else {
        alert('Invalid username or password.');
    }
}

function register() {
    const username = document.getElementById('register-username').value;
    const password = document.getElementById('register-password').value;

    const userExists = users.some(user => user.username === username);

    if (userExists) {
        alert('Username already taken.');
    } else {
        users.push({ username, password });
        alert('Registration successful!');
    }
}