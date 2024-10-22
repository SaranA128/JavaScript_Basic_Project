function validateDOB() {
    const dobInput = document.getElementById('dob');
    const dobValue = dobInput.value;
    const errorMessage = document.getElementById('error-message');
  
    const minDate = new Date('2000-01-01');
    const maxDate = new Date('2020-09-01');
    const selectedDate = new Date(dobValue);
  
    if (selectedDate >= minDate && selectedDate <= maxDate) {
      errorMessage.textContent = '';
    } else {
      errorMessage.textContent = 'Please select a date between 01.01.2000 and 01.09.2020';
    }
  }