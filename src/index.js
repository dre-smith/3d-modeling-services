'use strict';

import countTimer from './modules/countTimer';
import toggleMenu from './modules/toggleMenu';
import togglePopUp from './modules/togglePopUp';
import tabs from './modules/tabs';
import slider from './modules/slider';
import calc from './modules/calc';
import SliderCarousel from './modules/sliderCarousel';
import command from './modules/command';
import forms from './modules/forms';
import sendForm from './modules/sendForm';

countTimer('01 01 2022');
toggleMenu();
togglePopUp();
tabs();
slider();
calc(100);
command();
forms();
sendForm();

const carousel = new SliderCarousel({
    main: '.companies-wrapper',
    wrap: '.companies-hor',
    slidesToShow: 4,
    infinity: true,
    responsive: [
        {
            breakpoint: 1024,
            slidesToShow: 3,
        },
        {
            breakpoint: 768,
            slidesToShow: 2,
        },
        {
            breakpoint: 576,
            slidesToShow: 1,
        },
    ],
});
carousel.init();