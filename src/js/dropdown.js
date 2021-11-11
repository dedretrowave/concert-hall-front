;(function() {
    const dropDownClassName = 'dropdown';
    const dropdownParents = document.querySelectorAll(`.${dropDownClassName}-parent`);

    dropdownParents.forEach(dropdown => {
        dropdown.addEventListener('click', (e) => {
            e.stopPropagation();

            const currentTarget = e.currentTarget;

            let isToggled = currentTarget.classList.contains(`${dropDownClassName}-parent--active`);

            if (isToggled) {
                currentTarget.classList.remove(`${dropDownClassName}-parent--active`);
                currentTarget.querySelector(`.${dropDownClassName}`).classList.remove(`${dropDownClassName}--active`);
            } else {
                currentTarget.classList.add(`${dropDownClassName}-parent--active`);
                currentTarget.querySelector(`.${dropDownClassName}`).classList.add(`${dropDownClassName}--active`);
            }
        })
    })
})();