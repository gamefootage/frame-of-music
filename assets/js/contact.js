
$(document).ready(function() {

    $("#email-contact-form").on("submit", function(e) {
        e.preventDefault();

        emailjs.sendForm('service_90gdmfq', 'template_hy9y9uj', '#email-contact-form')
        .then(function(response) {
            console.log('SUCCESS!', response.status, response.text);
            alert("Your email was successfully sent!");
        }, function(error) {
            console.log('FAILED...', error);
            alert("Uh oh! There was a problem sending your email! Please try again.");
        });
    });
    
});