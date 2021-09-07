const togglePopUp = () => {
    const popUp = document.querySelector('.popup'),
        popUpButton = document.querySelectorAll('.popup-btn');

    popUpButton.forEach((elem) => {
        elem.addEventListener('click', () => {
            popUp.style.display = 'block';
            if (document.documentElement.scrollWidth > 768) {
                popUp.style.opacity = 0;
                const showAnimate = setInterval(() => {
                    popUp.style.opacity = 0.1 + +(popUp.style.opacity);
                    if (popUp.style.opacity >= 1) {
                        clearInterval(showAnimate);
                    };
                }, 25);
            } else {
                popUp.style.opacity = 1;
            };
        });
    });

    popUp.addEventListener('click', (event) => {
        let target = event.target;
        const popUpClose = () => {
            if (document.documentElement.scrollWidth > 768) {
                const hideAnimate = setInterval(() => {
                    popUp.style.opacity -= 0.1;
                    if (popUp.style.opacity <= 0) {
                        clearInterval(hideAnimate);
                        popUp.style.display = 'none';
                    };
                }, 25);
            } else {
                popUp.style.display = 'none';
            };
        };
        if (target.classList.contains('popup-close')) {
            popUpClose();
        } else {
            target = target.closest('.popup-content');
            if (!target) {
                popUpClose();
            };
        };
    });
};

export default togglePopUp;