wmo = document.querySelector('.wrapper__mobile');
burger = document.querySelector('.burger');
cl = document.querySelector('.close__mobile')

burger.addEventListener('click', function() {
    wmo.classList.add('amogus');
    if(wmo.classList.contains('amogus')) {
        document.body.style.overflow = 'hidden';
    }
})

cl.addEventListener('click', function() {
    wmo.classList.remove('amogus');
    if (!wmo.classList.contains('amogus')) {
        document.body.style.overflow= 'visible';
    }
})
