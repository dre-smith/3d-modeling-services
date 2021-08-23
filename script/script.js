window.addEventListener('DOMContentLoaded', function () {
    'use strict';

    // Таймер
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
                return number <= 9 ? '0' + number : number;
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

    // Меню
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

    //Кнопка
    const mouseImage = document.querySelector('a[href^="#service-block"]');

    mouseImage.addEventListener('click', (elem) => {
        elem.preventDefault();
        const goto = mouseImage.hasAttribute('href') ? mouseImage.getAttribute('href') : 'body';
        document.querySelector(goto).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });

    //Всплывающее окно
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
            const hideAnimate = setInterval(() => {
                popUp.style.opacity -= 0.1;
                if (popUp.style.opacity <= 0) {
                    clearInterval(hideAnimate);
                    popUp.style.display = 'none';
                };
            }, 25);
        });
    };
    togglePopUp();
});