// ========================================
// EDIT THESE VARIABLES TO CUSTOMIZE YOUR PORTFOLIO
// ========================================

// Personal Information
const greeting = "Hi There,";
const firstName = "I'm Connor";
const lastName = "Pace";

// Social Media Links
const linkedinUrl = "https://www.linkedin.com/in/yourprofile";
const githubUrl = "https://github.com/yourprofile";
const instagramUrl = "https://www.instagram.com/yourprofile";
const whatsappUrl = "https://wa.me/1234567890"; // Replace with your WhatsApp number

// Section Content
const sections = {
    about: {
        title: "About Me",
        content: "This is the About section. Add your bio and information here."
    },
    skills: {
        title: "Skills",
        content: "This is the Skills section. Add your skills here."
    },
    education: {
        title: "Education",
        content: "This is the Education section. Add your educational background here."
    },
    work: {
        title: "Work",
        content: "This is the Work section. Add your projects and work here."
    },
    experience: {
        title: "Experience",
        content: "This is the Experience section. Add your work experience here."
    },
    contact: {
        title: "Contact",
        content: "This is the Contact section. Add your contact information here."
    }
};

// ========================================
// DO NOT EDIT BELOW THIS LINE
// ========================================

// Update content on page load
document.addEventListener('DOMContentLoaded', () => {
    // Update hero section
    document.getElementById('greeting').textContent = greeting;
    document.getElementById('firstName').textContent = firstName;
    document.getElementById('lastName').textContent = lastName;

    // Update social media links
    document.getElementById('linkedinLink').href = linkedinUrl;
    document.getElementById('githubLink').href = githubUrl;
    document.getElementById('instagramLink').href = instagramUrl;
    document.getElementById('whatsappLink').href = whatsappUrl;

    // Update sections
    document.getElementById('aboutTitle').textContent = sections.about.title;
    document.getElementById('aboutContent').textContent = sections.about.content;
    
    document.getElementById('skillsTitle').textContent = sections.skills.title;
    document.getElementById('skillsContent').textContent = sections.skills.content;
    
    document.getElementById('educationTitle').textContent = sections.education.title;
    document.getElementById('educationContent').textContent = sections.education.content;
    
    document.getElementById('workTitle').textContent = sections.work.title;
    document.getElementById('workContent').textContent = sections.work.content;
    
    document.getElementById('experienceTitle').textContent = sections.experience.title;
    document.getElementById('experienceContent').textContent = sections.experience.content;
    
    document.getElementById('contactTitle').textContent = sections.contact.title;
    document.getElementById('contactContent').textContent = sections.contact.content;
});

// Network animation
const canvas = document.getElementById('networkCanvas');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const particles = [];
const particleCount = 50;

class Particle {
    constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.vx = (Math.random() - 0.5) * 0.5;
        this.vy = (Math.random() - 0.5) * 0.5;
        this.radius = 3;
    }

    update() {
        this.x += this.vx;
        this.y += this.vy;

        if (this.x < 0 || this.x > canvas.width) this.vx *= -1;
        if (this.y < 0 || this.y > canvas.height) this.vy *= -1;
    }

    draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(59, 91, 219, 0.5)';
        ctx.fill();
    }
}

for (let i = 0; i < particleCount; i++) {
    particles.push(new Particle());
}

function connectParticles() {
    for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
            const dx = particles[i].x - particles[j].x;
            const dy = particles[i].y - particles[j].y;
            const distance = Math.sqrt(dx * dx + dy * dy);

            if (distance < 150) {
                ctx.beginPath();
                ctx.moveTo(particles[i].x, particles[i].y);
                ctx.lineTo(particles[j].x, particles[j].y);
                ctx.strokeStyle = `rgba(59, 91, 219, ${0.2 * (1 - distance / 150)})`;
                ctx.lineWidth = 1;
                ctx.stroke();
            }
        }
    }
}

function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    particles.forEach(particle => {
        particle.update();
        particle.draw();
    });

    connectParticles();

    requestAnimationFrame(animate);
}

animate();

window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});

// Smooth scroll for navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// Active nav link on scroll
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-links a');

    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        if (scrollY >= sectionTop - 60) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});
