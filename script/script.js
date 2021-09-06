window.addEventListener('DOMContentLoaded', function () {
    'use strict';

    const scrollTo = (elem) => {
        document.querySelector(elem).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    };

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
        const body = document.querySelector('body'),
            menu = document.querySelector('menu');

        const handlerMenu = () => {
            menu.classList.remove('active-menu');
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
    toggleMenu();

    //всплывающее окно
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
            slider = document.querySelector('.portfolio-content'),
            portfolioDots = document.querySelector('.portfolio-dots'),
            portfolioItems = document.querySelectorAll('.portfolio-content>.portfolio-item');

        for (let i = 1; i <= portfolioItems.length; i++) {
            const dots = document.createElement('li');
            dots.classList.add('dot');
            portfolioDots.append(dots);
            if (portfolioItems[0]) {
                document.querySelector('.dot').classList.add('dot-active');
            };
        };

        const dot = document.querySelectorAll('.dot');

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

    //калькулятор
    const calc = (price = 100) => {
        const calcBlock = document.querySelector('.calc-block'),
            calcType = document.querySelector('.calc-type'),
            calcSquare = document.querySelector('.calc-square'),
            calcDay = document.querySelector('.calc-day'),
            calcInputs = calcBlock.querySelectorAll('.calc-block>input'),
            calcCount = document.querySelector('.calc-count'),
            totalValue = document.getElementById('total');

        calcInputs.forEach((elem) => {
            elem.addEventListener('input', () => {
                elem.value = elem.value.replace(/\D/g, '');
            });
        });

        const countSum = () => {
            let total = 0,
                countValue = 1,
                dayValue = 1;
            const typeValue = calcType.options[calcType.selectedIndex].value,
                squareValue = +calcSquare.value;

            if (calcCount.value > 1) {
                countValue += (calcCount.value - 1) / 10;
            };

            if (calcDay.value && calcDay.value < 5) {
                dayValue *= 2;
            } else if (calcDay.value && calcDay.value < 10) {
                dayValue *= 1.5;
            };

            const animateNumbers = () => {
                let steps = 0;
                const changeNum = setInterval(() => {
                    steps += parseInt(total / 100);
                    if (steps >= total) {
                        clearInterval(changeNum);
                        steps = total;
                    };
                    totalValue.innerHTML = steps;
                });
            };
            if (typeValue && squareValue) {
                total = parseInt(price * typeValue * squareValue * countValue * dayValue);
            };
            totalValue.textContent = animateNumbers(total);
        };

        calcBlock.addEventListener('change', (event) => {
            const target = event.target;
            if (target.matches('select') || target.matches('input')) {
                countSum()
            };
        });
    };
    calc(100);

    //команда
    const command = () => {
        const commandPhotos = document.querySelectorAll('.command__photo');

        commandPhotos.forEach((elem, index) => {
            const defaultCommandPhoto = document.querySelectorAll('.command__photo')[index].getAttribute('src');
            elem.addEventListener('mouseenter', (event) => {
                event.target.src = event.target.dataset.img;
            });
            elem.addEventListener('mouseleave', (event) => {
                event.target.src = defaultCommandPhoto;
            });
        });
    };
    command();

    //формы
    const forms = () => {
        const formName = document.querySelectorAll(`[id$='-name']`),
            formEmail = document.querySelectorAll(`[id$='-email']`),
            formPhone = document.querySelectorAll(`[id$='-phone']`),
            formMessage = document.getElementById('form2-message');

        formName.forEach((elem) => {
            elem.addEventListener('input', () => {
                elem.value = elem.value.replace(/[^А-Яа-яЕё\s]/g, '');
            });
            elem.addEventListener('blur', () => {
                elem.value = elem.value.replace(/\s+/g, ' ');
                elem.value = elem.value.replace(/^[\s]+|[\s]+$/g, '');
                elem.value = elem.value.replace(/(?:^|\s)\S/g, (val) => {
                    return val.toUpperCase();
                });
            });
        });

        formEmail.forEach((elem) => {
            elem.addEventListener('keydown', (event) => {
                if (event.keyCode === 32) {
                    event.preventDefault();
                    return false;
                };
                elem.value = elem.value.replace(/[^A-Za-z@\-_\.!~*']/g, '').trim();
            });
            elem.addEventListener('blur', () => {
                elem.value = elem.value.replace(/^[\-]+|[\-]+$/g, '');
            });
        });

        formPhone.forEach((elem) => {
            elem.addEventListener('input', () => {
                elem.value = elem.value.replace(/[^0-9\+]/g, '');
            });
        });

        formMessage.addEventListener('input', () => {
            formMessage.value = formMessage.value.replace(/[^А-Яа-яЕё\d\-\s,.!?]/g, '');
        });

        formMessage.addEventListener('blur', () => {
            formMessage.value = formMessage.value.replace(/\s{1,}/g, ' ');
            formMessage.value = formMessage.value.replace(/\-{1,}/g, '-');
            formMessage.value = formMessage.value.replace(/\.{1,}/g, '.');
            formMessage.value = formMessage.value.replace(/^[\s]+|[\s]+$/g, '');
        });
    };
    forms();

    const sendForm = () => {
        const errorMessage = 'Что-то пошло нет так...',
            loadMessage = 'Загрузка...',
            successMessage = 'Спасибо! Мы скоро с вами свяжемся!',
            forms = document.querySelectorAll('form'),
            statusMessage = document.createElement('div');

        statusMessage.style.cssText = 'font-size: 2rem';
        statusMessage.style.cssText = 'color: #fff';

        forms.forEach((elem) => {
            elem.addEventListener('submit', (event) => {
                const input = elem.querySelectorAll('input');
                event.preventDefault();
                elem.appendChild(statusMessage);
                statusMessage.textContent = loadMessage;
                const formData = new FormData(elem);
                let body = {};
                formData.forEach((val, key) => {
                    body[key] = val;
                });

                const postData = (body, outputData, errorData) => {
                    const request = new XMLHttpRequest();
                    request.addEventListener('readystatechange', () => {
                        if (request.readyState !== 4) {
                            return;
                        };
                        if (request.status === 200) {
                            outputData();
                        } else {
                            errorData(request.status);
                        };
                    });
                    request.open('POST', './server.php');
                    request.setRequestHeader('Content-Type', 'application/json');
                    request.send(JSON.stringify(body));
                };

                postData(body, () => {
                    statusMessage.textContent = successMessage;
                }, () => {
                    statusMessage.textContent = errorMessage;
                });

                input.forEach((input) => {
                    input.value = '';
                });

            });
        });
    };
    sendForm();
});