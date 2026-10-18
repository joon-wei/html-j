const mailBtn = document.getElementById('mail-btn');
const modal = document.getElementById('message-modal');

const letterView = document.getElementById('letter-view');
const successView = document.getElementById('success-view');

const yesBtn = document.getElementById('yes-btn');
const noBtn = document.getElementById('no-btn');
const closeBtn = document.getElementById('close-btn');

// Open the modal when envelope is clicked
mailBtn.addEventListener('click', () => {
    // Reset views back to default just in case
    letterView.classList.remove('hidden');
    successView.classList.add('hidden');
    yesBtn.classList.remove('shift-right');
    noBtn.classList.remove('fade-out');

    modal.showModal();
});

// When "Yes" is clicked: switch to the success screen
yesBtn.addEventListener('click', () => {
    letterView.classList.add('hidden');
    successView.classList.remove('hidden');
});

// When "No" is clicked: slide Yes over and fade No out
noBtn.addEventListener('click', () => {
    // Fade out the No button
    noBtn.classList.add('fade-out');
    
    // Slide the Yes button to the right and make it grow
    yesBtn.classList.add('shift-right');
});

// Close the modal when done
closeBtn.addEventListener('click', () => {
    modal.close();
});

