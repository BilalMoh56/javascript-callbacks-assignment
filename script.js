// Form validation, the process of ensuring a user's answers to a form are correct, complete, and fit within
// some specific criteria (e.g. a password having containing a number or special character), is a VERY
// important part of being a fullstack developer as it helps prevent errors, improve data accuracy, and ensures
// that no data is missing upon form completion

// Your assignment is to do the following:
// 1. Write a function called validateForm(e) where e is an 'event' variable (this is default
//    behavior for forms - feel free to call it 'event' as well)
// 2. Inside of validateForm(e), get the information of the form fields by either using querySelectors
//    or by traversing the event object and do the following checks:
//      2a. If the #name input element is empty, send an alert telling the user to enter their name
//          using the alert() method and then return false
//      2b. If the #email input element doesn't have a '@' in it, send an alert to tell them to enter
//          a proper email and then return false
//      2c. If the #password input element is empty, send an alert telling the user to enter a password
//          and return false
//      2d. If the #password input element is less than 8 characters, send an alert telling the user
//          their password must be at least 8 characters and then return false
// 3. If all of the checks pass, return true
// 4. Lastly, add an event listener onto the form (id="#userForm") that waits for
//    a 'submit' event and runs the validateForm callback function when that event happens

//Hint: When dealing with a form submission that takes an event variable as a parameter, use e.preventDefault()
//      (or event.preventDefault() depending on the name of the variable) to prevent the page
//      from refreshing when a form is submitted. Do all your checks after that line.

// Function to validate the form
function validateForm(e) {
    // Prevent the default form submission behavior
    e.preventDefault();

    // Get form fields information
    const nameInput = document.querySelector('#name');
    const emailInput = document.querySelector('#email');
    const passwordInput = document.querySelector('#password');

    // Check if the name is empty
    if (nameInput.value.trim() === '') {
        alert('Please enter your name.');
        return false;
    }

    // Check if the email contains '@'
    if (!emailInput.value.includes('@')) {
        alert('Please enter a valid email address.');
        return false;
    }

    // Check if the password is empty
    if (passwordInput.value.trim() === '') {
        alert('Please enter a password.');
        return false;
    }

    // Check if the password is at least 8 characters long
    if (passwordInput.value.length < 8) {
        alert('Your password must be at least 8 characters long.');
        return false;
    }

    // All checks passed, return true
    return true;
}

// Add event listener to the form
const userForm = document.querySelector('#userForm');
userForm.addEventListener('submit', validateForm);
