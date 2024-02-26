function emailValidation() {
    const emailInput = document.getElementById('email');
    const confirmEmailInput = document.getElementById('email_confirm');
    const alertMessage = document.getElementById('alert');
    const alertRow = document.getElementById('alert_row');

    confirmEmailInput.addEventListener('input', validateEmails);

    function validateEmails() {
        const email = emailInput.value;
        const confirmEmail = confirmEmailInput.value;

        if (email !== confirmEmail) {
            alertRow.style.display = 'table-row';
            confirmEmailInput.style.backgroundColor = 'rgba(230,169,171,0.5)';
        } else {
            alertRow.style.display = 'none';
            confirmEmailInput.style.backgroundColor = '';
        }
    }
}

window.onload = emailValidation;
