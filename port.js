document.getElementById('contact-submit').addEventListener('click', function() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (name && email && message) {
        alert('Message sent successfully!');
        document.getElementById('name').value = '';
        document.getElementById('email').value = '';
        document.getElementById('message').value = '';
    } else {
        alert('Please fill out all fields.');
    }
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

document.getElementById('cert1-upload').addEventListener('change', function(e) {
  const [file] = e.target.files;
  if (file) document.getElementById('cert1-img').src = URL.createObjectURL(file);
});
document.getElementById('cert2-upload').addEventListener('change', function(e) {
  const [file] = e.target.files;
  if (file) document.getElementById('cert2-img').src = URL.createObjectURL(file);
});