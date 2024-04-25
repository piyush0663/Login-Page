function validateForm(event) {
    event.preventDefault(); // Prevent form submission to the server

    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value.trim();

    // You can add more complex validation and authentication logic here
    // For simplicity, let's assume the username is 'user' and the password is 'password'

    if (username === 'user' && password === 'password') {
      alert('Login successful! Redirecting to thank you page.');
      window.location.href = 'thankyou.html'; // Replace 'thankyou.html' with the actual filename of your thank you page
    } else {
      alert('Invalid username or password. Please try again.');
    }
  }

  // Add an event listener to handle login form submission
  document.getElementById('loginForm').addEventListener('submit', validateForm);

  
