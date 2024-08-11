// Toggle password visibility
document.getElementById('toggle-password').addEventListener('click', function() {
    const passwordField = document.getElementById('password');
    const button = document.getElementById('toggle-password');
    
    if (passwordField.type === 'password') {
        passwordField.type = 'text';
        button.textContent = 'Hide';
    } else {
        passwordField.type = 'password';
        button.textContent = 'Show';
    }
});

// Handle form submission (add your login logic here)
document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();
    // Example: You can add your form submission logic here
    alert('Login functionality not implemented.');
});
