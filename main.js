const signUpCard = document.getElementById('sign-up-card');
const successCard = document.getElementById('success-card');
const signUpBtn = document.getElementById('sign-up-btn');
const successBtn = document.getElementById('success-btn');
const forms = document.querySelector('.needs-validation');
const emailInput = document.getElementById('sign-up-form');
const enteredEmail = document.getElementById('entered-email');


// use the 'toggle' method, this method adds the class if it doesn't exist and removes it if it does
const toggleCards = () => {
    signUpCard.classList.toggle('d-none');
    successCard.classList.toggle('d-none');
  };

// Adding bootstrap validation
const validation = () => {
    forms.addEventListener('submit', e => {
        // verify is the input is filled and is the email is valid
        if(!forms.checkValidity() || emailInput.validity.valid) {
            e.preventDefault()
            e.stopPropagation()
            forms.classList.add('was-validated')
        } else {
            forms.classList.remove('was-validated')
        }

    }, false);

    // added event listener real time validation to show the proper feedback.
    emailInput.addEventListener('input', () => {
        if (emailInput.validity.valid) {
          emailInput.classList.remove('is-invalid');
          emailInput.classList.add('is-valid');
        } else {
          emailInput.classList.remove('is-valid');
          emailInput.classList.add('is-invalid');
        }
      });
}

validation();

signUpBtn.addEventListener('click', () => {
    // since this is a dynamic submission form, by removing the 'was-validated' class the appearance is reset
    if (forms.checkValidity()) {
        forms.classList.remove('was-validated');
        toggleCards();
        // displaying the email entered
        enteredEmail.innerText = emailInput.value;
    }
});

successBtn.addEventListener('click', () => {
    //clear input and reset appearance
    forms.classList.remove('was-validated');
    emailInput.classList.remove('is-valid');
    emailInput.value = '';
    toggleCards();
});
