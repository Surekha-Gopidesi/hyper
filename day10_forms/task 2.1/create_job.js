document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('form');
    const openingDateInput = document.getElementById('opening-date');
  
    
    form.addEventListener('submit', function (event) {
        const jobTitle = document.querySelector('input[placeholder="Entre your job title"]').value.trim();
        const type = document.getElementById('type').value;
        const department = document.getElementById('department').value;
        const country = document.getElementById('country').value;
        const education = document.getElementById('education').value;
        const description = document.getElementById('Description').value.trim();
        const openingDate = openingDateInput.value;
        if (!jobTitle || !type || !department || !country || !education || !description || !openingDate) {
            alert("Please fill in all the required fields.");
            event.preventDefault(); 
        }
    });
  });