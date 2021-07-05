
window.addEventListener('scroll', function(){
    var scroll = document.querySelector('.scrollTop');
    scroll.classList.toggle("active" , window.scrollY > 50)
});

function scrollToTop() {
    console.log('scrolling');
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}
