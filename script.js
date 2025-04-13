function handleFaceRecognition() {
    // This will be implemented later with actual face recognition
    alert('Face recognition feature coming soon!');
}

function handlePasswordEntry() {
    const password = prompt('Please enter your password:');
    if (password) {
        // Here you would typically verify the password
        alert('Password entry feature coming soon!');
    }
}

// Existing functionality
function showNameInput() {
    document.querySelector('.name-input-container').style.display = 'block';
}

// Add click event to the circle
document.querySelector('.circle').addEventListener('click', showNameInput); 