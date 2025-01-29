window.dataLayer = {
    'event': 'pageView',
    'pageView': 'guest',
    'userId': '12345', 
    'userType': 'guest', 
    'pageCategory': 'home', 
    'pageTitle': document.title, 
    'timestamp': new Date().toString(),
    'pageUrl': window.location.href, 
   
};
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