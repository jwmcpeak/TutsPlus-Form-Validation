(function() {


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

    function validate(element) {
        let errorAtt = element.getAttribute('data-error-element');
        let isValid = element.validity.valid;

        if (!errorAtt) {
            return isValid;
        }

        let errorElement = document.querySelector(errorAtt);

        if (isValid) {
            errorElement.innerHTML = '';
            return true;
        }

        errorElement.innerHTML = getErrorMessage(element);
    }    

    let forms = document.querySelectorAll('form[data-formval]');

    [].forEach.call(forms, function(form) {
        form.addEventListener('submit', function(e) {

            if ([].every.call(form.elements, validate)) {
                return;
            }
    
            e.preventDefault();
        });

        [].forEach.call(form.elements, function(element) {
            element.addEventListener('input', function(e) {
                validate(e.target);
            });
        });
    });

    

})();