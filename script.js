const form  = document.getElementsByTagName('form')[0];

//email, country, zipcode, pass, passconf
const email = document.getElementById('mail');
const emailError = document.querySelector('#mail + span.error');
const country = document.getElementById('country');
const countryError = document.querySelector('#country + span.error');
const zip = document.getElementById('zip');
const zipError = document.querySelector('#zip + span.error');
const pass = document.getElementById('pass');
const passError = document.querySelector('#pass + span.error');
const passC = document.getElementById('passC');
const passCError = document.querySelector('#passC + span.error');
const success = document.querySelector('span.success');

email.addEventListener('input', (event) => {
  if (email.validity.valid) {
    // In case there is an error message visible, if the field
    // is valid, we remove the error message.
    emailError.textContent = ''; // Reset the content of the message
    emailError.className = 'error'; // Reset the visual state of the message
  } else {
    // If there is still an error, show the correct error
    showError();
  }
});

country.addEventListener('input', (event) => {
    if (country.validity.valid) {
      countryError.textContent = '';
      countryError.className = 'error';
    } else {
      showError();
    }
  });

  zip.addEventListener('input', (event) => {
    if (zip.validity.valid) {
      zipError.textContent = '';
      zipError.className = 'error';
    } else {
      showError();
    }
  });

  pass.addEventListener('input', (event) => {
    if (pass.validity.valid) {
      passError.textContent = '';
      passError.className = 'error';
    } else {
      showError();
    }
  });

  passC.addEventListener('input', (event) => {
    if (passC.validity.valid) {

      passCError.textContent = ''; 
      passCError.className = 'error'; 
    } else {
      showError();
    }
  });

form.addEventListener('submit', (event) => {
  // if the email field is valid, we let the form submit
  success.textContent = ''; 
  if (!email.validity.valid) {
    // If it isn't, we display an appropriate error message
    showError();
    // Then we prevent the form from being sent by canceling the event
    event.preventDefault();
  }
  else if(!country.validity.valid){
    showError();
    event.preventDefault();
  }
  else if(!zip.validity.valid){
    showError();
    event.preventDefault();
  }
  else if(!pass.validity.valid){
    showError();
    event.preventDefault();
  }
  else if(!passC.validity.valid || passC.value!=pass.value){
    showError();
    event.preventDefault();
  }
  else{
    event.preventDefault();
    success.textContent = 'Yey'; 
  }
});



function showError() {
  if (email.validity.valueMissing) {
    // If the field is empty,
    // display the following error message.
    emailError.textContent = 'You need to enter an e-mail address.';
  } else if (email.validity.typeMismatch) {
    // If the field doesn't contain an email address,
    // display the following error message.
    emailError.textContent = 'Entered value needs to be an e-mail address.';
  } else if (email.validity.tooShort) {
    // If the data is too short,
    // display the following error message.
    emailError.textContent = `Email should be at least ${email.minLength} characters; you entered ${email.value.length}.`;
  }
  // Set the styling appropriately
  emailError.className = 'error active';


  if (country.validity.valueMissing) {
    countryError.textContent = 'You need to enter a valid country.';
  }else if (country.validity.tooShort) {
    countryError.textContent = `country should be at least ${country.minLength} characters; you entered ${country.value.length}.`;
  }
  countryError.className = 'error active';

  if (zip.validity.valueMissing) {
    zipError.textContent = 'You need to enter a zip code.';
  }
  zipError.className = 'error active';


  if (pass.validity.valueMissing) {
    passError.textContent = 'You need to enter a password.';
  }else if (pass.validity.tooShort) {
    passError.textContent = `pass should be at least ${pass.minLength} characters; you entered ${pass.value.length}.`;
  }
  passError.className = 'error active';

  if (passC.validity.valueMissing) {
    passCError.textContent = 'You need to re-enter your password.';
  }else if (passC.value!=pass.value) {
    passCError.textContent = `Password fields must match`;
  }
  passCError.className = 'error active';
}
