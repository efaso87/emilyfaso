document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('.learn-more-btn').addEventListener('click', function() {
        window.scrollTo({
            top: document.querySelector('#about-me').offsetTop,
            behavior: 'smooth'
        });
    });
    
});
