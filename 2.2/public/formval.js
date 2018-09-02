(function() {
    let email = document.getElementById('email');

    email.addEventListener('input', function(e) {
        //console.log(email.validity);

        if (!email.validity.valid) {
            e.preventDefault();
            alert('Email is invalid');
        }


        // sumbit the form
    });

})();