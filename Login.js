function validateForm() {
    const email = document.querySelector('.input-email').value;
    const phoneNumber = document.querySelector('.input-number').value;
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phonePattern = /^\d{10}$/;

    if (!emailPattern.test(email)) {
        alert('Please enter a valid email address.');
        return false;
    }

    if (!phonePattern.test(phoneNumber)) {
        alert('Please enter a valid 10-digit phone number.');
        return false;
    }

    alert('Form submitted successfully!');
    return true;
}