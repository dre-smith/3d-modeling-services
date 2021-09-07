const toggleMenu = () => {
    const body = document.querySelector('body'),
        menu = document.querySelector('menu');

    const handlerMenu = () => {
        menu.classList.remove('active-menu');
    };

    const scrollTo = (elem) => {
        document.querySelector(elem).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    };

    body.addEventListener('click', (event) => {
        let target = event.target;
        if (target.closest('menu')) {
            event.preventDefault();
            if (target.closest('.close-btn')) {
                handlerMenu();
            };
            if (target.closest('menu ul li a')) {
                scrollTo(target.getAttribute('href'));
                handlerMenu();
            };
        } else {
            if (target.closest('.menu')) {
                menu.classList.add('active-menu');
            } else {
                handlerMenu();
            };
        };
        if (target.closest('main')) {

            if (target.closest('main a')) {
                event.preventDefault();
                scrollTo(target.closest('main a').getAttribute('href'));
            };
        };
    });
};

export default toggleMenu;