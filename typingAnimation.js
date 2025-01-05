// Typing Animation Script
const typingLine = document.querySelector('.typing-line');
const text = typingLine.textContent.trim(); // Remove leading/trailing whitespace
typingLine.textContent = ''; // Clear the text initially

let index = 0;
const typingSpeed = 55; // Adjust typing speed (in milliseconds)

// Create a blinking cursor element
const cursor = document.createElement('span');
cursor.classList.add('cursor');
typingLine.appendChild(cursor); // Add cursor to the typing line

function type() {
    if (index < text.length) {
        typingLine.textContent += text[index];
        index++;
        setTimeout(type, typingSpeed);
    } else {
        // Remove the blinking cursor after typing is complete
        cursor.remove();
    }
}

// Start the typing animation
type();