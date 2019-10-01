const slideNumber = document.querySelector('.slide-number').children;
const slides = document.querySelector('.slides').children;
let activeSlide = 0;
removeActiveFromSlide();
showHide();
slideNumber[activeSlide].classList.add('active');

for (let i = 0; i < slideNumber.length; i++) {
    slideNumber[i].addEventListener('click', function () {
        removeActiveFromSlide();
        this.classList.add('active');
        activeSlide = i;
        showHide();
    });
};

function showHide() {
    slides[activeSlide].classList.remove('hide');
}

function removeActiveFromSlide() {
    for (let i = 0; i < slideNumber.length; i++) {
        slideNumber[i].classList.remove('active');
        slides[i].classList.add('hide');

    };
}

/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function myFunction() {
    document.getElementById("LibraryDropdown").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function (event) {
    if (!event.target.matches('#library-btn')) {
        if (document.getElementById("LibraryDropdown").classList.contains('show')) {
            document.getElementById("LibraryDropdown").classList.toggle("show");
        }

    }
}