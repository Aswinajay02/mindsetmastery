// Smooth Scroll Animations
const sections = document.querySelectorAll('section');
const options = {
    threshold: 0.1
};

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
        }
    });
}, options);

sections.forEach(section => {
    observer.observe(section);
});

// Back to Top Button
const backToTop = document.createElement('button');
backToTop.id = 'back-to-top';
backToTop.innerHTML = '↑';
backToTop.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});
document.body.appendChild(backToTop);

// Blog Search Functionality
const searchInput = document.getElementById('blog-search');
const blogCards = document.querySelectorAll('.blog-card');

searchInput.addEventListener('input', (e) => {
    const query = e.target.value.toLowerCase();
    blogCards.forEach(card => {
        const title = card.querySelector('h3').textContent.toLowerCase();
        card.style.display = title.includes(query) ? 'block' : 'none';
    });
});
