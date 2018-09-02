(function() {
    let email = document.getElementById('email');
    let theForm = document.getElementById('the-form');



    email.addEventListener('input', function(e) {
        //console.log(email.validity);
        let element = e.target;
        let errorAtt = element.getAttribute('data-error-element');

        if (!errorAtt) {
            return;
        }

        let errorElement = document.querySelector(errorAtt);

        if (element.validity.valid) {
            errorElement.innerHTML = '';
            return;
        }

        errorElement.innerHTML = 'Please enter a valid email address.';


        // sumbit the form
    });

    theForm.addEventListener('submit', function(e) {
        if (email.validity.valid) {
            return;
        }

        e.preventDefault();
    });

    

})();