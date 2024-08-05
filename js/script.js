document.getElementById('menu-toggle').addEventListener('click', function() {
    document.getElementById('side-menu').style.left = '0';
});

document.getElementById('close-btn').addEventListener('click', function() {
    document.getElementById('side-menu').style.left = '-100%';
});


document.getElementById('scroll-left').addEventListener('click', function() {
    document.getElementById('services-content').scrollBy({
        left: -300,
        behavior: 'smooth'
    });
});

document.getElementById('scroll-right').addEventListener('click', function() {
    document.getElementById('services-content').scrollBy({
        left: 300,
        behavior: 'smooth'
    });
});
