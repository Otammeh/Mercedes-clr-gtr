document.addEventListener("DOMContentLoaded", function() {
    
    document.querySelector('.logo').addEventListener('click', function() {
        alert('Welcome to the Mercedes CLR GTR site!');
    });
    
    
    document.querySelectorAll('section h2').forEach(function(element) {
        element.addEventListener('mouseover', function() {
            element.style.color = '#ff7e5f';
        });
        element.addEventListener('mouseout', function() {
            element.style.color = '';
        });
    });

    const icons = document.querySelectorAll('#contact a');
    icons.forEach(icon => {
        icon.addEventListener('mouseover', function () {
            this.style.transform = 'scale(1.2)';
        });
        icon.addEventListener('mouseout', function () {
            this.style.transform = 'scale(1)';
        });
    });
});
