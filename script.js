// ========== CUSTOMIZATION VARIABLES ==========
// Change these variables to personalize the birthday message
const BIRTHDAY_PERSON_NAME = "Papa";  // Change this to the person's name
const CUSTOM_MESSAGE = "Happy Birthday papa i love you very much and hope you have an awesome day"; // Change this to your custom message

// Number of pictures you have (pic1.jpg, pic2.jpg, etc.)
const NUMBER_OF_PICTURES = 5;
// ============================================

// Initialize the page with custom content
document.addEventListener('DOMContentLoaded', function() {
    // Update the birthday title with the person's name
    const titleElement = document.getElementById('birthday-title');
    titleElement.textContent = `🎉 Happy Birthday ${BIRTHDAY_PERSON_NAME}! 🎂`;
    
    // Update the custom message
    const messageElement = document.getElementById('custom-message');
    messageElement.textContent = `🌟 ${CUSTOM_MESSAGE} 🌟`;
    
    // Initialize stars
    createStars();
    
    // Auto-celebrate every 15 seconds
    setInterval(() => {
        if (Math.random() < 0.3) {
            createConfetti();
        }
    }, 15000);
});

// Create twinkling stars
function createStars() {
    const starsContainer = document.getElementById('stars');
    for (let i = 0; i < 50; i++) {
        const star = document.createElement('div');
        star.className = 'star';
        star.innerHTML = '✨';
        star.style.left = Math.random() * 100 + '%';
        star.style.top = Math.random() * 100 + '%';
        star.style.animationDelay = Math.random() * 2 + 's';
        starsContainer.appendChild(star);
    }
}

// Create regular confetti
function createConfetti() {
    const colors = ['#ff6b6b', '#4ecdc4', '#ffd93d', '#fd79a8', '#6c5ce7'];
    for (let i = 0; i < 50; i++) {
        setTimeout(() => {
            const confetti = document.createElement('div');
            confetti.className = 'confetti';
            confetti.style.left = Math.random() * 100 + '%';
            confetti.style.background = colors[Math.floor(Math.random() * colors.length)];
            confetti.style.animationDelay = Math.random() * 2 + 's';
            confetti.style.animationDuration = (Math.random() * 3 + 2) + 's';
            document.body.appendChild(confetti);
            
            setTimeout(() => {
                confetti.remove();
            }, 5000);
        }, i * 50);
    }
}

// Create falling pictures
function createFallingPictures() {
    for (let i = 0; i < NUMBER_OF_PICTURES; i++) {
        // Create multiple instances of each picture for a fuller effect
        for (let j = 0; j < 4; j++) {
            setTimeout(() => {
                const picture = document.createElement('div');
                picture.className = 'falling-picture';
                
                // Create img element
                const img = document.createElement('img');
                img.src = `pic${i + 1}.jpg`; // pic1.jpg, pic2.jpg, etc.
                img.alt = `Memory ${i + 1}`;
                
                // Handle image load error
                img.onerror = function() {
                    console.warn(`Could not load pic${i + 1}.jpg`);
                    picture.remove();
                };
                
                picture.appendChild(img);
                
                // Random positioning and animation
                picture.style.left = Math.random() * 100 + '%';
                picture.style.animationDelay = Math.random() * 2 + 's';
                picture.style.animationDuration = (Math.random() * 4 + 3) + 's';
                
                // Random rotation
                const randomRotation = Math.random() * 360;
                picture.style.setProperty('--rotation', randomRotation + 'deg');
                
                document.body.appendChild(picture);
                
                // Remove after animation
                setTimeout(() => {
                    if (picture.parentNode) {
                        picture.remove();
                    }
                }, 7000);
            }, (i * 4 + j) * 200); // Stagger the pictures
        }
    }
}

// Blow out candles
function blowCandles() {
    const flames = document.querySelectorAll('.flame');
    flames.forEach((flame, index) => {
        setTimeout(() => {
            flame.style.opacity = '0';
            flame.style.transform = 'translateX(-50%) scale(0)';
        }, index * 200);
    });
    
    setTimeout(() => {
        alert(`🎉 Make a wish, ${BIRTHDAY_PERSON_NAME}! 🌟`);
        flames.forEach(flame => {
            flame.style.opacity = '1';
            flame.style.transform = 'translateX(-50%) scale(1)';
        });
    }, 1500);
}

// Main celebration function
function celebrate() {
    createConfetti();
    createFallingPictures();
    
    // Optional: Play a celebration sound effect (uncomment if you have an audio file)
    // const audio = new Audio('celebration.mp3');
    // audio.play().catch(e => console.log('Audio playback failed:', e));
}
