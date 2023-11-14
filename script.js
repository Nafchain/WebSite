document.addEventListener('DOMContentLoaded', function() {
    var weAreElement = document.querySelector('.WeAre');
    
    window.addEventListener('scroll', function() {
        var scrollPosition = window.scrollY + window.innerHeight;
        var elementPosition = weAreElement.offsetTop;
        
        if (scrollPosition > elementPosition) {
            weAreElement.style.opacity = 1;
            weAreElement.style.transform = 'translateX(0)';
        }
    });
});
