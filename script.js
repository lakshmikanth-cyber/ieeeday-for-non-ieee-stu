// Wait for the DOM to be fully loaded before running the script
document.addEventListener('DOMContentLoaded', () => {

    // Get all the necessary elements
    const modal = document.getElementById('registration-modal');
    const registerButtons = document.querySelectorAll('.register-btn');
    const closeButton = document.querySelector('.close-btn');
    const registrationForm = document.getElementById('registration-form');
    const bildthonCheckbox = document.getElementById('event-bildthon');
    const teamMemberField = document.getElementById('team-member-field');

    // Function to open the modal
    function openModal() {
        modal.style.display = 'block';
    }

    // Function to close the modal
    function closeModal() {
        modal.style.display = 'none';
    }

    // Add click event to all "Register Now" buttons
    registerButtons.forEach(button => {
        button.addEventListener('click', openModal);
    });

    // Add click event to the close button (X)
    closeButton.addEventListener('click', closeModal);

    // Close the modal if the user clicks outside of the modal content
    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            closeModal();
        }
    });

    // --- INTERACTIVE PART ---
    // Show or hide the "Team Member" field based on the "AI Bildthon" checkbox
    bildthonCheckbox.addEventListener('change', () => {
        if (bildthonCheckbox.checked) {
            teamMemberField.style.display = 'block'; // Show the field
        } else {
            teamMemberField.style.display = 'none';  // Hide the field
        }
    });

    // Handle form submission
    registrationForm.addEventListener('submit', (event) => {
        event.preventDefault(); // Prevent the form from actually submitting

        // Get form data (you can send this to a server or Google Sheet)
        const formData = new FormData(registrationForm);
        const name = formData.get('name');
        
        // Show a success message (for this demo)
        alert(`Thank you for registering, ${name}! We've received your details.`);

        // Close the modal and reset the form
        closeModal();
        registrationForm.reset();
        teamMemberField.style.display = 'none'; // Re-hide the team field
    });

});