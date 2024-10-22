document.getElementById('calculateBtn').addEventListener('click', function() {
    const startDate = new Date(document.getElementById('startDate').value);
    const endDate = new Date(document.getElementById('endDate').value);
    
    if (isNaN(startDate) || isNaN(endDate)) {
        document.getElementById('result').innerText = "Please select valid dates.";
        return;
    }
    
    const timeDifference = endDate - startDate;
    const dayDifference = Math.ceil(timeDifference / (1000 * 3600 * 24));
    
    if (dayDifference < 0) {
        document.getElementById('result').innerText = "End date must be after start date.";
    } else {
        document.getElementById('result').innerText = `Number of days: ${dayDifference}`;
    }
});