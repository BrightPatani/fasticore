document.getElementById('menu-toggle').addEventListener('click', function() {
    document.getElementById('side-menu').style.left = '0';
});

document.getElementById('close-btn').addEventListener('click', function() {
    document.getElementById('side-menu').style.left = '-100%';
});


document.getElementById('scroll-left').addEventListener('click', function() {
    document.getElementById('services-content').scrollBy({
        left: -400,
        behavior: 'smooth'
    });
});

document.getElementById('scroll-right').addEventListener('click', function() {
    document.getElementById('services-content').scrollBy({
        left: 400,
        behavior: 'smooth'
    });
});



// scroll to top 

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("ScrollToTopBtn").style.display = "block";
    } else {
        document.getElementById("ScrollToTopBtn").style.display = "none";
    }
}



// When the user clicks on the button, scroll to the top of the document
function scrollToTop() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE, and Opera
}

// Smooth scroll to the top when the user clicks the button
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}