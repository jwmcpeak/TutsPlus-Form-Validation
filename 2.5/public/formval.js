(function() {
    let email = document.getElementById('email');
    let theForm = document.getElementById('the-form');

    let validationProps = [
        'valueMissing',
        'typeMismatch'
    ];

    function getErrorMessage(element) {
        for (let ii = 0; ii < validationProps.length; ii++ ) {
            let prop = validationProps[ii];

            if (element.validity[prop]) {
                return element.getAttribute('data-error-' + prop);
            }
        }

        return '';
    }


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

        errorElement.innerHTML = getErrorMessage(element);


        // sumbit the form
    });

    theForm.addEventListener('submit', function(e) {
        if (email.validity.valid) {
            return;
        }

        e.preventDefault();
    });

    

})();