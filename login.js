function validateForm() {
    const name = document.getElementById('name').value.trim();
    const gender = document.getElementById('gender').value;
    const phone = document.getElementById('phone').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();
  
    // Check if any field is empty
    if (name === '' || gender === '' || phone === '' || email === '' || password === '') {
      alert('Please fill out all fields.');
      return false;
    }
  
    // Validate name: Check if it contains only letters and spaces
    const nameRegex = /^[A-Za-z\s]+$/;
    if (!name.match(nameRegex)) {
      alert('Please enter a valid name (only letters and spaces are allowed).');
      return false;
    }
  
    // Validate gender: Check if a gender is selected
    if (gender !== 'male' && gender !== 'female' && gender !== 'other') {
      alert('Please select a valid gender.');
      return false;
    }
  
    // Validate phone number: Check if it contains only digits and is 10 characters long
    const phoneRegex = /^\d{10}$/;
    if (!phone.match(phoneRegex)) {
      alert('Please enter a valid 10-digit phone number.');
      return false;
    }
  
    // Validate email: Check if it follows the email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.match(emailRegex)) {
      alert('Please enter a valid email address.');
      return false;
    }
  
    // Validate password: Check if it is at least 6 characters long
    if (password.length < 6) {
      alert('Password must be at least 6 characters long.');
      return false;
    }
  
    // Show success message and reset the form
    alert('Successfully registered!');
  document.getElementById('registrationForm').reset(); // Replace 'registrationForm' with the ID of your form
  window.location.href = 'login.html'; // Replace 'login.html' with the actual filename of your login page
}

// Add an event listener to handle form submission
document.getElementById('registrationForm').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent form submission to the server
  validateForm();
});






  