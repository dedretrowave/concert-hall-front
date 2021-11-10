;(function() {
    document.querySelector('.header__toggle').addEventListener('click', e => {
        let isToggled = e.currentTarget.classList.contains('header__toggle--active');

        if (isToggled) {
            e.currentTarget.parentNode.classList.remove('header--active');
            e.currentTarget.classList.remove('header__toggle--active');
        } else {
            e.currentTarget.parentNode.classList.add('header--active');
            e.currentTarget.classList.add('header__toggle--active');
        }
    });
})();