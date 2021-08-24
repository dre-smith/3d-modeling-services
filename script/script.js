window.addEventListener('DOMContentLoaded', function () {
    'use strict';

    //таймер
    const countTimer = (deadline) => {
        const timerHours = document.getElementById('timer-hours'),
            timerMinutes = document.getElementById('timer-minutes'),
            timerSeconds = document.getElementById('timer-seconds');

        const getTimeRemaining = () => {
            const dateStop = new Date(deadline).getTime(),
                dateNow = new Date().getTime(),
                timeRemaining = (dateStop - dateNow) / 1000,
                seconds = Math.floor(timeRemaining % 60),
                minutes = Math.floor((timeRemaining / 60) % 60),
                hours = Math.floor(timeRemaining / 60 / 60);
            return { timeRemaining, hours, minutes, seconds };
        };

        const updateClock = () => {
            const timer = getTimeRemaining();

            const addZero = (number) => {
                return number <= 9 ? `0${number}` : number;
            };

            timerHours.textContent = addZero(timer.hours);
            timerMinutes.textContent = addZero(timer.minutes);
            timerSeconds.textContent = addZero(timer.seconds);

            if (timer.timeRemaining <= 0) {
                clearInterval(timeInterval);
            };

            if (timer.hours <= 0 && timer.minutes <= 0 && timer.seconds <= 0) {
                timerHours.textContent = "00";
                timerMinutes.textContent = "00";
                timerSeconds.textContent = "00";
            };
        };
        const timeInterval = setInterval(updateClock, 1000);
    };
    countTimer('01 01 2022');

    //меню
    const toggleMenu = () => {
        const buttonMenu = document.querySelector('.menu'),
            closeButton = document.querySelector('.close-btn'),
            menu = document.querySelector('menu'),
            menuItems = menu.querySelectorAll('ul>li');

        const handlerMenu = () => {
            menu.classList.toggle('active-menu');
        };
        buttonMenu.addEventListener('click', handlerMenu);
        closeButton.addEventListener('click', handlerMenu);
        menuItems.forEach((elem) => elem.addEventListener('click', handlerMenu));
    };
    toggleMenu();

    //кнопка
    const scrollBottom = () => {
        const buttonScrollBottom = document.querySelector('a[href^="#service-block"]');
        const scrollBottom = (elem) => {
            elem.preventDefault();
            const goto = buttonScrollBottom.hasAttribute('href') ? buttonScrollBottom.getAttribute('href') : 'body';
            document.querySelector(goto).scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        };
        buttonScrollBottom.addEventListener('click', scrollBottom);
    };
    scrollBottom();

    //всплывающее окно
    const togglePopUp = () => {
        const popUp = document.querySelector('.popup'),
            popUpButton = document.querySelectorAll('.popup-btn'),
            popUpClose = document.querySelector('.popup-close');
        popUpButton.forEach((elem) => {
            elem.addEventListener('click', () => {
                popUp.style.display = 'block';
                popUp.style.opacity = 1;
            });
        });
        popUpClose.addEventListener('click', () => {
            popUp.style.opacity = 1;
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
        });
    };
    togglePopUp();

    //табы
    const tabs = () => {
        const tabHeader = document.querySelector('.service-header'),
            tab = tabHeader.querySelectorAll('.service-header-tab'),
            tabContent = document.querySelectorAll('.service-tab');

        const toggleTabContent = (index) => {
            for (let i = 0; i < tabContent.length; i++) {
                if (index === i) {
                    tab[i].classList.add('active');
                    tabContent[i].classList.remove('d-none');
                } else {
                    tab[i].classList.remove('active');
                    tabContent[i].classList.add('d-none');
                };
            };
        };
        tabHeader.addEventListener('click', (event) => {
            let target = event.target;
            target = target.closest('.service-header-tab');
            if (target) {
                tab.forEach((item, index) => {
                    if (item === target) {
                        toggleTabContent(index);
                    };
                });
            };
        });
    };
    tabs();

    //слайдер
    const slider = () => {
        const slide = document.querySelectorAll('.portfolio-item'),
            button = document.querySelectorAll('.portfolio-btn'),
            dot = document.querySelectorAll('.dot'),
            slider = document.querySelector('.portfolio-content');

        let currentSlide = 0,
            interval;

        const prevSlide = (elem, index, stringClass) => {
            elem[index].classList.remove(stringClass);
        };

        const nextSlide = (elem, index, stringClass) => {
            elem[index].classList.add(stringClass);
        };

        const autoPlaySlide = () => {
            prevSlide(slide, currentSlide, 'portfolio-item-active');
            prevSlide(dot, currentSlide, 'dot-active');
            currentSlide++;
            if (currentSlide >= slide.length) {
                currentSlide = 0;
            };
            nextSlide(slide, currentSlide, 'portfolio-item-active');
            nextSlide(dot, currentSlide, 'dot-active');
        };

        const startSlide = (time = 3000) => {
            interval = setInterval(autoPlaySlide, time);
        };

        const stopSlide = () => {
            clearInterval(interval);
        };

        slider.addEventListener('click', (event) => {
            event.preventDefault();

            let target = event.target;

            if (!target.matches('.portfolio-btn, .dot')) {
                return;
            }

            prevSlide(slide, currentSlide, 'portfolio-item-active');
            prevSlide(dot, currentSlide, 'dot-active');

            if (target.matches('#arrow-right')) {
                currentSlide++;
            } else if (target.matches('#arrow-left')) {
                currentSlide--;
            } else if (target.matches('.dot')) {
                dot.forEach((elem, index) => {
                    if (elem == target) {
                        currentSlide = index;
                    }
                });
            };

            if (currentSlide >= slide.length) {
                currentSlide = 0;
            };

            if (currentSlide < 0) {
                currentSlide = slide.length - 1;
            };

            nextSlide(slide, currentSlide, 'portfolio-item-active');
            nextSlide(dot, currentSlide, 'dot-active');

        });

        slider.addEventListener('mouseover', (event) => {
            if (event.target.matches('.portfolio-btn') || event.target.matches('.dot')) {
                stopSlide();
            };
        });

        slider.addEventListener('mouseout', (event) => {
            if (event.target.matches('.portfolio-btn') || event.target.matches('.dot')) {
                startSlide();
            };
        });
        startSlide(1500);
    };

    slider();
});