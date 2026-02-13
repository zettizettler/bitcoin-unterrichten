// Einfache Formular-Handler
document.getElementById('signupForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const button = this.querySelector('button');
    const originalText = button.textContent;
    
    button.textContent = 'Wird gesendet...';
    button.disabled = true;
    
    // Simuliere Absenden (in Produktion: an Backend/Email-Service senden)
    setTimeout(() => {
        button.textContent = '✓ Danke! Wir melden uns.';
        button.style.background = '#28a745';
        this.reset();
        
        setTimeout(() => {
            button.textContent = originalText;
            button.style.background = '';
            button.disabled = false;
        }, 3000);
    }, 1000);
});

// Smooth Scroll für Nav-Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});
