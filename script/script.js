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
            menuItem = menu.querySelectorAll('ul>li'),
            widthBody = document.querySelector('body').scrollWidth;

        const addMenu = () => {
            menu.style.display = 'flex';
            const start = Date.now(),
                timerMenu = setInterval(() => {
                    const timePassed = Date.now() - start;
                    if (widthBody >= 768) {
                        menu.style.left = `${timePassed}px`;
                        if (timePassed >= widthBody) {
                            clearInterval(timerMenu);
                        };
                    } else {
                        menu.style.left = `${widthBody}px`;
                        clearInterval(timerMenu);
                    };
                });
        };

        const removeMenu = () => {
            menu.style.display = 'none';
        };

        buttonMenu.addEventListener('click', addMenu);
        closeButton.addEventListener('click', removeMenu);
        menuItem.forEach((elem) => elem.addEventListener('click', removeMenu));
    };
    toggleMenu();

    //Кнопка
    const mouseImage = document.querySelector('a[href^="#service-block"]');

    mouseImage.addEventListener('click', (element) => {
        element.preventDefault();
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
            });
        });
        popUpClose.addEventListener('click', () => {
            popUp.style.display = 'none';
        });
    };
    togglePopUp();
});