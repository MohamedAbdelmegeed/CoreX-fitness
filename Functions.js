document.addEventListener('DOMContentLoaded', () => {
    
   var contactForm = document.getElementById('contactPageForm');
   var phoneInput = document.getElementById('userPhone');
   var phoneError = document.getElementById('phoneError');
   var successBox = document.getElementById('successMessage');

    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            // 1. Stop the page from refreshing
            e.preventDefault();

         
            const phoneNumber = phoneInput.value;

            if (phoneNumber.length !== 11) {
               
                phoneError.style.display = 'block';
                phoneInput.style.borderColor = 'red';
                return; 
            }

            phoneError.style.display = 'none';
            contactForm.style.display = 'none';
            successBox.style.display = 'block';

            console.log("Form Data Arrived:", phoneNumber);
        });
    }
});