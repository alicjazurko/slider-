const slider = document.querySelector('.slider');
const banner = document.querySelector('.root');
const arrow = document.querySelector('.fa-caret-left');

slider.addEventListener('click', function() {
    // arrow.classList.add('fa-caret-left');
    if (banner.classList.contains('open')) {
        banner.classList.remove('open');
        arrow.classList.remove('fa-caret-right');
        arrow.classList.add('fa-caret-left');
    } else {
        banner.classList.add('open');
        arrow.classList.remove('fa-caret-left');
        arrow.classList.add('fa-caret-right');
    }
})